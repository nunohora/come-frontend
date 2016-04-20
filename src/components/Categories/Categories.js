import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import slug from 'slug'
import CSSModules from 'react-css-modules'
import styles from './Categories.scss'

class Categories extends React.Component {

    static propTypes = {
        categories: PropTypes.array.isRequired,
        postcode: PropTypes.string.isRequired
    }

    buildUrl(category) {
        const { name, id } = category
        let rep = `/search/${this.props.postcode}`

        if (category.name !== 'Total') {
            rep += `/${id}/${slug(name, {lower: true})}`
        }

        return rep;
    }

    renderCategory(category) {
        return (
            <li key={category.id}>
                <Link to={this.buildUrl(category)}>
                    {category.name}
                    <span className='tag'>{category.number}</span>
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div styleName="side-panel">
                <div className="categories">
                    <h4>Categorias</h4>
                    <ul className="list-unstyled">
                        { this.props.categories.map(category => ( this.renderCategory(category) )) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default CSSModules(Categories, styles)
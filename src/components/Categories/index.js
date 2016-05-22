import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import slug from 'slug'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

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
            <li styleName="list-item" key={category.id}>
                <Link to={this.buildUrl(category)}>
                    {category.name}
                    <span styleName='tag'>{category.number}</span>
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div styleName="side-panel">
                <h6 styleName="title">Categorias</h6>
                <div styleName="categories">
                    <ul className="list-unstyled">
                        { this.props.categories.map(category => ( this.renderCategory(category) )) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default CSSModules(Categories, styles)
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import slug from 'slug'

export default class Categories extends React.Component {

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

        return rep
    }

    renderCategory(category) {
        return (
            <li className="list-item" key={category.id}>
                <Link to={this.buildUrl(category)}>
                    {category.name}
                    <span className='tag'>{category.number}</span>
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div className="side-panel">
                <h6 className="title">Categorias</h6>
                <div className="categories">
                    <ul className="list-unstyled">
                        { this.props.categories.map(category => ( this.renderCategory(category) )) }
                    </ul>
                </div>
            </div>
        )
    }
}
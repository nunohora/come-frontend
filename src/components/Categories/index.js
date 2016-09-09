import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import slug from 'slug'

export default class Categories extends React.Component {

    static propTypes = {
        categories: PropTypes.array.isRequired,
        postcode: PropTypes.string.isRequired
    }

    buildUrl(category) {
        const { name } = category
        let rep = `/search/${this.props.postcode}`

        if (category.name !== 'Total') {
            rep += `/${slug(name, {lower: true})}`
        }

        return rep
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
            <div className="widget">
                <h6 className="title">Categorias</h6>
                <hr />
                <ul className="link-list">
                    { this.props.categories.map(category => ( this.renderCategory(category) )) }
                </ul>
            </div>
        )
    }
}
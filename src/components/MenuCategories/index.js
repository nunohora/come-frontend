import React, { PropTypes } from 'react'
import slug from 'slug'

export default class MenuCategories extends React.Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    renderCategory(category, id) {
        const href = `#${slug(category, { lower: true })}`

        return (
            <li className="list-item" key={id}>
                <a href={href}>{category}</a>
            </li>
        )
    }

    render() {
        return (
            <div className="side-panel">
                <h6 className="title">Categorias</h6>
                <div className="categories">
                    <ul className="list-unstyled">
                        { this.props.categories.map((category, index) => ( this.renderCategory(category, index))) }
                    </ul>
                </div>
            </div>
        )
    }
}
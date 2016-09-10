import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import slug from 'slug'

export default class MenuCategories extends React.Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    renderCategory(category, id) {
        const href = `${this.props.path}#${slug(category, { lower: true })}`

        return (
            <li key={id}>
                <Link to={href} role="tab">{category}</Link>
            </li>
        )
    }

    render() {
        return (
            <div className="widget">
                <div className="title">
                    <FormattedMessage id="CATEGORIES" tagName="h5" />
                </div>
                <hr />
                <ul className="link-list">
                    { this.props.categories.map((category, index) => ( this.renderCategory(category, index))) }
                </ul>
            </div>
        )
    }
}
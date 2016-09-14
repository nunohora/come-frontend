import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import slug from 'slug'

class Categories extends React.Component {

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
                <Link styleName="link" to={this.buildUrl(category)}>
                    <span>{category.name}</span>
                    <span>{category.number}</span>
                </Link>
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
                <ul>
                    { this.props.categories.map(category => ( this.renderCategory(category) )) }
                </ul>
            </div>
        )
    }
}

export default CSSModules(Categories, styles)
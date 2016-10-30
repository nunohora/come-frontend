import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import { FormattedMessage } from 'react-intl'
import slug from 'slug'
import styles from './styles.scss'

class MenuCategories extends React.Component {

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
                <ul styleName="link-list">
                    { this.props.categories.map((category, index) => ( this.renderCategory(category, index))) }
                </ul>
            </div>
        )
    }
}

export default CSSModules(MenuCategories, styles)
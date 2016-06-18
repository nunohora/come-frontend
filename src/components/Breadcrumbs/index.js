import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Breadcrumbs from 'react-router-breadcrumbs'
import styles from './styles.scss'

class BreadcrumbsNav extends React.Component {

    static propTypes = {
        routes: PropTypes.object
    }

    render() {
        return (
            <div>
                <Breadcrumbs routes={this.props.routes} separator=" -> "/>
            </div>
        )
    }
}

export default CSSModules(BreadcrumbsNav, styles)
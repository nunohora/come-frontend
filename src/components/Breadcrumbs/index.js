import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import Breadcrumbs from 'react-breadcrumbs'
import styles from './styles.scss'

class BreadcrumbsNav extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumbs 
                    routes={this.props.routes} 
                    params={this.props.params}
                    separator=" -> "/>
            </div>
        )
    }
}

export default CSSModules(BreadcrumbsNav, styles)
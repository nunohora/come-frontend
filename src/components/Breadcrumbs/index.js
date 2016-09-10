import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Breadcrumbs from 'react-breadcrumbs'
import styles from './styles.scss'

class BreadcrumbsNav extends React.Component {

    static propTypes = {
        routes: PropTypes.object,
        params: PropTypes.object
    }

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
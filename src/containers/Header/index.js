import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import NavBar from './NavBar'
import Breadcrumbs from 'components/Breadcrumbs'
import LocaleChange from './LocaleChange'
import styles from './styles.scss'

class Header extends React.Component {

    static propTypes = {
        routes: PropTypes.object.isRequired
    }

    render() {
        return (
            <header styleName="header">
                <div styleName="header-top-bar">
                    <div className="container">
                        <div className="row">
                            <LocaleChange />
                        </div>
                    </div>
                </div>
                <NavBar />
                <Breadcrumbs routes={this.props.routes} />
            </header>
        );
    }
}

export default CSSModules(Header, styles)
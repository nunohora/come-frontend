import React from 'react'
import CSSModules from 'react-css-modules'
import NavBar from './NavBar'
import LocaleChange from './LocaleChange'
import styles from './styles.scss'

class Header extends React.Component {
    render() {
        return (
            <header styleName="header">
                <div styleName="header-top-bar">
                    <div className="container">
                        <div className="row">
                            <LocaleChange />
                            <ul styleName="header-social">
                                <li>
                                    <i className="fa fa-lg fa-facebook-square"></i>
                                </li>
                                <li>
                                    <i className="fa fa-lg fa-twitter-square"></i>
                                </li>
                                <li>
                                    <i className="fa fa-lg fa-google-plus-square"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <NavBar />
            </header>
        );
    }
}

export default CSSModules(Header, styles)
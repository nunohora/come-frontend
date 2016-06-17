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
                        </div>
                    </div>
                </div>
                <NavBar />
            </header>
        );
    }
}

export default CSSModules(Header, styles)
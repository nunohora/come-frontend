import React, { PropTypes } from 'react'
import ga from 'react-ga'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { login, logout, initAuth } from 'redux-store/modules/lock'
import CSSModules from 'react-css-modules'
import { FormattedMessage } from 'react-intl'
import LocaleChange from './LocaleChange'
import MediaQuery from 'react-responsive'
import classNames from 'classnames'
import styles from './styles.scss'

import headerLogo from 'img/header-logo.png'

let TiUser = require('react-icons/lib/ti/user')
let TiChevronLeft = require('react-icons/lib/ti/chevron-left')
let TiThMenu = require('react-icons/lib/ti/th-menu')

class Header extends React.Component {

    static propTypes = {
        routes: PropTypes.object.isRequired,
        name: PropTypes.string,
        isAuthenticated: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        initAuth: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            navOpen: false
        }
    }

    componentWillMount() {
        this.props.initAuth()
    }

    login() {
        ga.event({ category: 'NavBar', action: 'Login' })
        this.props.login()
    }

    logout() {
        ga.event({ category: 'NavBar', action: 'Logout' })
        this.props.logout()
    }

    renderLoggedInWide() {
        return (
            <ul styleName="user">
                <li>
                    <span>{this.props.name}</span>
                    <TiUser size={30} styleName="user-icon" />
                    <TiChevronLeft size={20} className="dropdown-arrow" />
                    <ul styleName="dropdown-menu">
                        <li styleName="menu-item">
                            <Link to="/user/my-account">
                                <FormattedMessage id="MY_ACCOUNT" tagName="span"/>
                            </Link>
                        </li>
                        <li styleName="menu-item">
                            <Link to="/user/my-orders">
                                <FormattedMessage id="MY_ORDERS" tagName="span"/>
                            </Link>
                        </li>
                        <li styleName="menu-item">
                            <Link to="/user/my-payments">
                                <FormattedMessage id="MY_PAYMENTS" tagName="span"/>
                            </Link>
                        </li>
                        <li styleName="menu-item">
                            <Link to="/user/my-addresses">
                                <FormattedMessage id="MY_ADDRESSES" tagName="span"/>
                            </Link>
                        </li>
                        <li styleName="menu-item">
                            <a onClick={this.props.logout}>
                                <FormattedMessage id="LOGOUT" tagName="span"/>
                            </a>
                        </li>
                        <li styleName="menu-item">
                            <Link to="/faq">
                                <FormattedMessage id="HELP" tagName="span"/>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }

    renderLoggedOutWide() {
        return (
            <ul styleName="menu">
                <li>
                    <a className="btn btn-sm btn-filled" styleName="header-btn" onClick={this.login.bind(this)}>Login</a>
                </li>
                <li>
                    <Link to="/help">
                        <FormattedMessage id="HELP" tagName="span"/>
                    </Link>
                </li>
            </ul>
        )
    }

    renderLoggedInNarrow() {
        return (
            <ul onClick={this.onMenuItemClick.bind(this)}>
                <li styleName="menu-item">
                    <Link to="/user/my-account">
                        <FormattedMessage id="MY_ACCOUNT" tagName="span"/>
                    </Link>
                </li>
                <li styleName="menu-item">
                    <Link to="/user/my-orders">
                        <FormattedMessage id="MY_ORDERS" tagName="span"/>
                    </Link>
                </li>
                <li styleName="menu-item">
                    <Link to="/user/my-payments">
                        <FormattedMessage id="MY_PAYMENTS" tagName="span"/>
                    </Link>
                </li>
                <li styleName="menu-item">
                    <Link to="/user/my-addresses">
                        <FormattedMessage id="MY_ADDRESSES" tagName="span"/>
                    </Link>
                </li>
                <li styleName="menu-item">
                    <a onClick={this.props.logout}>
                        <FormattedMessage id="LOGOUT" tagName="span"/>
                    </a>
                </li>
                <li styleName="menu-item">
                    <Link to="/faq">
                        <FormattedMessage id="HELP" tagName="span"/>
                    </Link>
                </li>
            </ul>
        )
    }

    renderLoggedOutNarrow() {
        return (
            <ul onClick={this.onMenuItemClick.bind(this)}>
                <li className="menu-item">
                    <a onClick={this.login.bind(this)}>Login</a>
                </li>
                <li className="menu-item">
                    <Link to="/help">
                        <FormattedMessage id="HELP" tagName="span"/>
                    </Link>
                </li>
            </ul>
        )
    }

    onMenuIconClick() {
        this.setState({ navOpen: !this.state.navOpen })
        console.warn('click')
    }

    onMenuItemClick() {
        this.setState({ navOpen: false })
    }

    render() {
        const { isAuthenticated } = this.props

        const renderNavWide = isAuthenticated ? this.renderLoggedInWide.bind(this) : this.renderLoggedOutWide.bind(this)
        const renderNavNarrow = isAuthenticated ? this.renderLoggedInNarrow.bind(this) : this.renderLoggedOutNarrow.bind(this)

        const classes = classNames({
            'narrow-menu-open': this.state.navOpen
        })

        return (
            <header styleName="header">
                <nav role="navigation">
                    <div className="left" styleName="module">
                        <Link to="/">
                            <img src={headerLogo} alt="TakeAway" />
                        </Link>
                        <span className="label label-success" styleName="demo-label">
                            DEMO
                        </span>
                    </div>
                    <div className="module widget-handle mobile-toggle right visible-xs">
                        <TiThMenu onClick={this.onMenuIconClick.bind(this)} size={20} className="dropdown-menu-icon" />
                    </div>
                    <MediaQuery className={classes} styleName="narrow-menu" maxWidth={767}>
                        {renderNavNarrow()}
                    </MediaQuery>
                    <div className="right hidden-xs">
                        <div className="module left" styleName="module-widget-handle">
                            {renderNavWide()}
                        </div>
                        <div className="module left" styleName="module-widget-handle">
                            <LocaleChange />
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.lock.profile.name,
        isAuthenticated: state.lock.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    initAuth: () => { initAuth(dispatch) },
    login: () => { login(dispatch) },
    logout: () => { logout(dispatch) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Header, styles))
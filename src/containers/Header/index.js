import React, { PropTypes } from 'react'
import ga from 'react-ga'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { login, signup, logout } from 'redux-store/modules/lock'
import CSSModules from 'react-css-modules'
import FontAwesome from 'react-fontawesome'
import LocaleChange from './LocaleChange'
import styles from './styles.scss'

import headerLogo from 'img/header-logo.png'

class Header extends React.Component {

    static propTypes = {
        routes: PropTypes.object.isRequired,
        nickname: PropTypes.string,
        isAuthenticated: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired,
        signup: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
    }

    renderLoggedIn() {
        return (
            <ul>
                <li>
                    <FontAwesome
                        name="user"
                    />
                </li>
            </ul>
        )
    }

    login() {
        ga.event({ category: 'NavBar', action: 'Login' })
        this.props.login()
    }

    signup() {
        ga.event({ category: 'NavBar', action: 'Signup' })
        this.props.signup()
    }

    logout() {
        ga.event({ category: 'NavBar', action: 'Logout' })
        this.props.logout()
    }

    renderLoggedOut() {
        return (
            <ul styleName="menu">
                <li>
                    <a onClick={this.login.bind(this)}>Login</a>
                </li>
                <li>
                    <a onClick={this.signup.bind(this)}>Signup</a>
                </li>
                <li>
                    <Link to="/help">Ajuda</Link>
                </li>
            </ul>
        )
    }

    render() {
        const { isAuthenticated } = this.props

        const renderNav = isAuthenticated ? this.renderLoggedIn.bind(this) : this.renderLoggedOut.bind(this);

        return (
            <header styleName="header">
                <nav role="navigation">
                    <div className="left" styleName="module">
                        <Link to="/">
                            <img src={headerLogo} alt="TakeAway" />
                        </Link>
                    </div>
                    <div className="module right">
                        <div className="module left" styleName="module-widget-handle">
                            {renderNav()}
                        </div>
                        <div className="module left">
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
        nickname: state.lock.profile.nickname,
        isAuthenticated: state.lock.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    login: () => { dispatch(login(dispatch)) },
    signup: () => { dispatch(signup(dispatch)) },
    logout: () => { logout(dispatch) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Header, styles))
import React, { PropTypes } from 'react'
import ga from 'react-ga'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import lock from 'reducers/lock'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

import headerLogo from 'img/header-logo.png'

const { login, signup, logout } = lock

class NavBar extends React.Component {

    static propTypes = {
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
            <ul styleName="navbar-nav" className="navbar-right">
                <li>
                    <a>Olá {this.props.nickname}</a>
                </li>
                <li>
                    <a>A minha conta</a>
                </li>
                <li>
                    <a onClick={this.logout.bind(this)}>Logout</a>
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
            <ul styleName="navbar-nav" className="navbar-right">
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
            <div styleName="header-nav-bar">
                <nav className="navbar" role="navigation">
                    <div className="container">
                        <div className="col-md-3">
                            <Link styleName="logo" className="navbar-brand" to="/">
                                <img src={headerLogo} alt="TakeAway" />
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse">
                            {renderNav()}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    nickname: state.lock.profile.nickname,
    isAuthenticated: state.lock.isAuthenticated
})

const mapDispatchToProps = (dispatch, props) => ({
    login: () => { dispatch(login(dispatch)) },
    signup: () => { dispatch(signup(dispatch)) },
    logout: () => { logout(dispatch) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(NavBar, styles))
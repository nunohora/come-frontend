import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { showLock, login, logout } from 'redux/modules/lock'
import CSSModules from 'react-css-modules'
import styles from './Header.scss'

import headerLogo from 'img/header-logo.png'

class NavBar extends React.Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        showLock: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    renderLoggedIn() {
        return (
            <ul styleName="navbar-nav" className="navbar-right">
                <li>
                    <a>Olá {this.props.profile}</a>
                </li>
                <li>
                    <a>A minha conta</a>
                </li>
                <li>
                    <a onClick={this.props.logout}>Logout</a>
                </li>
            </ul>
        )
    }

    renderLoggedOut() {
        return (
            <ul styleName="navbar-nav" className="navbar-right">
                <li>
                    <a onClick={this.props.showLock}>Login</a>
                </li>
                <li>
                    <a onClick={this.props.showLock}>Signup</a>
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
                        <div styleName="navbar-header" className="col-md-3">

                            <Link className="navbar-brand" to="/">
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
    profile: state.profile
})

const mapDispatchToProps = (dispatch, props) => ({
    login: (creds) => { login(dispatch, creds) },
    logout: () => { logout(dispatch) },
    showLock: () => { dispatch(showLock) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(NavBar, styles))
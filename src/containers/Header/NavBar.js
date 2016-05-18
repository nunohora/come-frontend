import React, { PropTypes } from 'react'
import { Modal, ModalTrigger } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { showLock, loginUser, logoutUser } from 'redux/modules/lock'
import LoginForm from 'components/LoginForm/LoginForm'
import SignupForm from 'components/SignupForm/SignupForm'
import CSSModules from 'react-css-modules'
import styles from './Header.scss'

import headerLogo from 'img/header-logo.png'

class NavBar extends React.Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        loginUser: PropTypes.func.isRequired,
        logoutUser: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.renderModals = this.renderModals.bind(this);
        this.close = this.close.bind(this);

        this.state = {};
    }

    close() {
        this.setState({
            showSignupModal: false,
            showLoginModal: false
        })
    }

    handleLogin(props) {
        debugger;
        this.props.login()
    }

    handleLogout(props) {
        debugger;
        this.props.logout();
    }

    openLogin() {
        this.setState({ showLoginModal: true })
    }

    openSignup() {
        this.setState({ showSignupModal: true })
    }

    renderModals() {
        return (
            <div>
                <Modal show={this.state.showLoginModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm onSubmit={this.handleLogin.bind(this)}/>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showSignupModal} onHide={this.close}>
                    <SignupForm />
                </Modal>
            </div>
        )
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
                    <a onClick={this.handleLogout.bind(this)}>Logout</a>
                </li>
            </ul>
        )
    }

    renderLoggedOut() {
        return (
            <ul styleName="navbar-nav" className="navbar-right">
                <li>
                    <a onClick={this.openLogin.bind(this)}>Login</a>
                </li>
                <li>
                    <a onClick={this.openSignup.bind(this)}>Signup</a>
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
                {this.renderModals()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect((mapStateToProps), {
    loginUser,
    logoutUser
})(CSSModules(NavBar, styles))
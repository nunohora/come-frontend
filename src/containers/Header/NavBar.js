import React, { PropTypes } from 'react'
import { Modal, ModalTrigger } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logoutUser } from 'redux/modules/user'
import LoginForm from 'components/LoginForm/LoginForm'
import SignupForm from 'components/SignupForm/SignupForm'
import CSSModules from 'react-css-modules'
import styles from './Header.scss'

import headerLogo from 'img/header-logo.png'

class NavBar extends React.Component {

    static propTypes = {
        username: PropTypes.string,
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
                        <LoginForm />
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
                    <a>Olá {this.props.username}</a>
                </li>
                <li>
                    <a>A minha conta</a>
                </li>
                <li>
                    <a onClick={this.onLogoutClick}>Logout</a>
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
        const renderNav = this.props.username ? this.renderLoggedIn.bind(this) : this.renderLoggedOut.bind(this);

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
    username: state.username
})

export default connect((mapStateToProps), {
    logoutUser
})(CSSModules(NavBar, styles))
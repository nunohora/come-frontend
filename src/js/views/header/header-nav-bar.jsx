import React from 'react';
import { Link } from 'react-router';
import { Modal, ModalTrigger, Button } from 'react-bootstrap';
import UserStore from '../../stores/UserStore';
import Actions from '../../actions/UserActions';
import LoginForm from '../forms/login-form.jsx';
import SignupForm from '../forms/signup-form.jsx';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.renderModals = this.renderModals.bind(this);
		this.close = this.close.bind(this);

		this.state = UserStore.getState();
	}

	componentDidMount() {
		UserStore.addChangeListener(this._onChange);
	}

	onLogoutClick() {
		Actions.logoutUser();
	}

	close() {
		this.setState({
			showSignupModal: false,
			showLoginModal: false
		});
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
		);
	}

	openLogin() {
		this.setState({ showLoginModal: true })
	}

	openSignup() {
		this.setState({ showSignupModal: true })
	}

	renderLoggedIn() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li>
					<a>Olá {this.state.user.username}</a>
				</li>
				<li>
					<a>A minha conta</a>
				</li>
				<li>
					<a onClick={this.onLogoutClick}>Logout</a>
				</li>
			</ul>
		);
	}

	renderLoggedOut() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li>
					<a onClick={this.openLogin.bind(this)}>Login</a>
				</li>
				<li>
					<a onClick={this.openSignup.bind(this)}>Signup</a>
				</li>
				<li>
					<Link to="help">Ajuda</Link>
				</li>
			</ul>
		);
	}

	render() {
		const renderNav = this.state.user.username ? this.renderLoggedIn.bind(this) : this.renderLoggedOut.bind(this);

		return (
			<div className="header-nav-bar">
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						<div className="navbar-header col-md-3">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<Link className="navbar-brand" to="/">
								<img src="build/img/header-logo.png" alt="TakeAway" />
							</Link>
						</div>
						<div className="collapse navbar-collapse">
							{renderNav()}
						</div>
					</div>
				</nav>
				{this.renderModals()}
			</div>
		);
	}

	_onChange() {
		this.setState(UserStore.getState());
	}
};

export default NavBar;
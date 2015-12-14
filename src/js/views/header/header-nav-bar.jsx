import React from 'react';
import { Link } from 'react-router';
import { Modal, ModalTrigger } from 'react-bootstrap';
import UserStore from '../../stores/UserStore';
import Actions from '../../actions/UserActions';
import LoginForm from '../forms/login-form.jsx';
//import SignupForm from '../forms/signup-form.jsx';

const forms = {
	'login': LoginForm
	//'signup': SignupForm
};

const HeaderModal = React.createClass({
	render() {
		return (
			<Modal {...this.props} title={this.props.title}
				animation={true}>
				<div className="modal-body"></div>
			</Modal>
		);
	}
});

module.exports = React.createClass({

	getInitialState() {
		return UserStore.getState();
	},

	componentDidMount() {
		UserStore.addChangeListener(this._onChange);
	},

	onLogoutClick() {
		Actions.logoutUser();
	},

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
	},

	renderLoggedOut() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li>
					<HeaderModal title="Login" form="login" className="modal-md-sm">
						<a>Login</a>
					</HeaderModal>
				</li>
				<li>
					<HeaderModal title="Registo" form="signup" className="medium">
						<a>Registo</a>
					</HeaderModal>
				</li>
				<li>
					<Link to="help">Ajuda</Link>
				</li>
			</ul>
		);
	},

	render() {
		let renderNav = this.state.user.username ? this.renderLoggedIn : this.renderLoggedOut;

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
			</div>
	    );
	},

	_onChange() {
		this.setState(UserStore.getState());
	}
});
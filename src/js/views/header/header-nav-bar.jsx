/** @jsx React.DOM */
var React 	 	 = require('react'),
	Link  		 = require('react-router').Link,
	Modal 	 	 = require('react-bootstrap').Modal,
	ModalTrigger = require('react-bootstrap').ModalTrigger,
	UserStore    = require('stores/UserStore'),
	Actions      = require('actions/UserActions');

var LoginForm  = require('views/forms/login-form'),
	SignupForm = require('views/forms/signup-form');

var forms = {
	'login': LoginForm,
	'signup': SignupForm
};

var HeaderModal = React.createClass({

	onRequestHide: function () {},

	render: function () {
		var HeaderForm = forms[this.props.form];

		return (
			<Modal {...this.props} title={this.props.title}
				animation={true}>
				<div className="modal-body">
					<HeaderForm />
				</div>
			</Modal>
		);
	}
});

module.exports = React.createClass({

	getInitialState: function () {
		var state = UserStore.getState();
		return state;
	},

	componentDidMount: function () {
		UserStore.addChangeListener(this._onChange);
	},

	onLogoutClick: function () {
		Actions.logoutUser();
	},

	renderLoggedIn: function () {
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

	renderLoggedOut: function () {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li>
					<ModalTrigger modal={ <HeaderModal title="Login" form="login" className="modal-md-sm" /> }>
						<a>Login</a>
					</ModalTrigger>
				</li>
				<li>
					<ModalTrigger modal={ <HeaderModal title="Registo" form="signup" className="medium" /> }>
						<a>Registo</a>
					</ModalTrigger>
				</li>
				<li>
					<Link to="help">Ajuda</Link>
				</li>
			</ul>
		);
	},

	render: function () {
		var state = this.state;

		var renderNav = this.state.user.username ? this.renderLoggedIn : this.renderLoggedOut;

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
								<img src="img/header-logo.png" alt="TakeAway" />
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

	_onChange: function() {
		var state = UserStore.getState();

		console.log('state: ', state);
		this.setState(state);
	}
});
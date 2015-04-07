/** @jsx React.DOM */
var React 	 	 = require('react'),
	Link  		 = require('react-router').Link,
	Modal 	 	 = require('react-bootstrap').Modal,
	ModalTrigger = require('react-bootstrap').ModalTrigger;

var LoginForm = require('views/forms/login-form');

var LoginModal = React.createClass({
	render: function () {
		return (
			<Modal {...this.props} title="Login"
				animation={true}>
				<LoginForm />
			</Modal>
		);
	}
});

module.exports = React.createClass({

	onLinkClick: function () {

	},

	render: function () {
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
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<ModalTrigger modal={ <LoginModal /> }>
										<a>Login</a>
									</ModalTrigger>
								</li>
								<li>
									<Link to="register">Registo</Link>
								</li>
								<li>
									<Link to="help">Ajuda</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
	    );
	}
});
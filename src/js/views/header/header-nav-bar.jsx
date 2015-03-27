/** @jsx React.DOM */
define(function (require) {
	var React = require('react'),
		Link  = require('react-router').Link;

	return React.createClass({
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
									<img src="src/img/header-logo.png" alt="TakeAway" />
								</Link>
							</div>
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav navbar-right">
									<li>
										<Link to="login">Login</Link>
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
});
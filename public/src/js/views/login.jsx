/** @jsx React.DOM */
define(function (require) {
	var React = require('react');

	return React.createClass({

		handleSubmit: function (event) {
			event.preventDefault();

			var email = this.refs.email.getDOMNode().value,
				pass = this.refs.pass.getDOMNode().value,
				transition;

			auth.login(email, pass, function (loggedIn) {
				if (!loggedIn) {
					return this.setState({ error: true });
				}

				if (this.attemptedTransition) {
					transition = this.attemptedTransition;
				}
			});
		},

		render: function () {
		  	return (
		  		<div className="container">
			  		<div className="login-form col-md-3 col-sm-6 col-xs-9">
						<div>
							<h4>Login</h4>
							<form>
								<div className="row">
									<div className="col-md-12">
										<input type="text" placeholder="Email*" />
										<input type="email" placeholder="Password*" />
										<button className="login-button">
											<i className="fa fa-paper-plane-o"></i>
											Login
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
		  		</div>
			);
		}
	});
});
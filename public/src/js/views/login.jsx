/** @jsx React.DOM */
define(function (require) {
	var React = require('react');

	return React.createClass({

		handleClick: function (e) {
			e.preventDefault();

			var pcode = this.props.params.pcode;

			$.getJSON(endpoint + pcode, function (result) {
				if (this.isMounted()) {
					this.setState({
						categories: [],
						restaurants: result,
						resultNumber: {
							number: result.length,
							postcode: pcode
						}
					});
				}

			}.bind(this));
		},

		handleChange: function (e) {
			var state = {};

			state[e.target.name] = e.target.value;
			this.setState(state);
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
										<input
											name="email"
											onChange={this.handleChange}
											type="text"
											placeholder="Email*" />

										<input
											name="password"
											onChange={this.handleChange}
											type="password"
											placeholder="Password*" />

										<button className="login-button" onClick={this.handleClick}>
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
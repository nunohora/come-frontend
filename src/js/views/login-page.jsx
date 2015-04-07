/** @jsx React.DOM */
var React  = require('react'),
	$ 	   = require('jquery');

var LoginForm = require('views/forms/login-form');

module.exports = React.createClass({

	render: function () {

	  	return (
	  		<div className="container">
		  		<div className="login-form col-md-3 col-sm-6 col-xs-9">
					<LoginForm />
				</div>
	  		</div>
		);
	}
});
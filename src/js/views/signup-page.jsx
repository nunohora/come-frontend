/** @jsx React.DOM */
var React  = require('react'),
	$ 	   = require('jquery');

var SignupForm = require('./forms/signup-form.jsx');

module.exports = React.createClass({

	render: function () {

	  	return (
	  		<div className="container">
		  		<div className="login-form col-md-3 col-sm-6 col-xs-9">
					<SignupForm />
				</div>
	  		</div>
		);
	}
});
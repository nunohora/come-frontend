/** @jsx React.DOM */
var React  = require('react'),
	$ 	   = require('jquery');

var SignupForm = require('views/forms/signup-form');

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
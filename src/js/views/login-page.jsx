var React  = require('react'),
	$ 	   = require('jquery');

var LoginForm = require('./forms/login-form.jsx');

module.exports = React.createClass({

	render: function () {

	  	return (
	  		<div className="container">
		  		<div className="login-form col-md-3 col-sm-6 col-xs-9">
		  			<h4>Login</h4>
					<LoginForm />
				</div>
	  		</div>
		);
	}
});
import React from 'react';
import LoginForm from './forms/login-form.jsx';

module.exports = React.createClass({
	render() {
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
/** @jsx React.DOM */
define(function (require) {
	var React 		 = require('react'),
		RouteHandler = require('react-router').RouteHandler,
		auth 		 = require('auth');

	var Footer = require('views/footer'),
		Header = require('views/header/main');

	return React.createClass({

		getInitialState: function () {
			return {
				loggedIn: auth.loggedIn()
			};
		},

		setStateOnAuth: function (loggedIn) {
			this.setState({
				loggedIn: loggedIn
			});
		},

		componentWillMount: function () {
			auth.onChange = this.setStateOnAuth;
			auth.login();
		},

		render: function () {
		  return (
		  		<div id="main-wrapper">
		      		<Header />
		      		<div className="page-content">
		      			<RouteHandler params={this.props.params}/>
		      		</div>
		      		<Footer />
	      		</div>
		    );
		}
	});
});
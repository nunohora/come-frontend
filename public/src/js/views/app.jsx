/** @jsx React.DOM */
define(function (require) {
	var React 		   			= require('react'),
		ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
		RouteHandler 			= require('react-router').RouteHandler,
		auth 		 			= require('auth');

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
		      		<ReactCSSTransitionGroup
		      			transitionName="page-transition"
		      			key={this.props.path}
		      			component="div"
		      			className="page-content">

		      			<RouteHandler params={this.props.params}/>

		      		</ReactCSSTransitionGroup>
		      		<Footer />
	      		</div>
		    );
		}
	});
});
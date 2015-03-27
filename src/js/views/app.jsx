/** @jsx React.DOM */
define(function (require) {
	var React 		   			= require('react'),
		ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
		RouteHandler 			= require('react-router').RouteHandler;

	var Footer = require('views/footer'),
		Header = require('views/header/main');

	return React.createClass({

		render: function () {
		  	return (
		  		<div id="main-wrapper">
		      		<Header />
		      		<ReactCSSTransitionGroup transitionName="page-transition" component="div" className="page-content">
		      			<RouteHandler key={this.props.path} params={this.props.params}/>
		      		</ReactCSSTransitionGroup>
		      		<Footer />
	      		</div>
		    );
		}
	});
});
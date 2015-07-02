/** @jsx React.DOM */
var React 		   			= require('react'),
	ReactCSSTransitionGroup = require('react/addons').addons.CSSTransitionGroup,
	RouteHandler 			= require('react-router').RouteHandler;

var Footer = require('views/footer'),
	Header = require('views/header/main');

module.exports = React.createClass({


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
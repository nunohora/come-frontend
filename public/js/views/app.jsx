/** @jsx React.DOM */
define(function (require) {
	var React 		 = require('react'),
		RouteHandler = require('react-router').RouteHandler,
		Footer 		 = require('jsx!views/footer'),
		Header 		 = require('jsx!views/header');
		
	var App = React.createClass({

		render: function () {
		  return (
		  		<div id="main-wrapper">
		      		<Header />
		      		<div id="page-content">
		      			<RouteHandler />
		      		</div>
		      		<Footer />
	      		</div>
		    );
		}
	});

	return App;
});
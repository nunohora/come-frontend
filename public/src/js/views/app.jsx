/** @jsx React.DOM */
define(function (require) {
	var React 		 = require('react'),
		RouteHandler = require('react-router').RouteHandler,
		Footer 		 = require('views/footer'),
		Header 		 = require('views/header');

	return React.createClass({
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
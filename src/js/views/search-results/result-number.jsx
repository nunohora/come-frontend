/** @jsx React.DOM */
define(function (require) {
	var React = require('react');

	return React.createClass({
		render: function () {
		  	return (
		  		<div className="col-md-10">
		  			<h5>{this.props.params.number} Resultados Para {this.props.params.postcode}</h5>
		  		</div>
	    	);
		}
	});
});
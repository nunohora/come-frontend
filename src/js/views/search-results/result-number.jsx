/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	render: function () {
	  	return (
	  		<div className="col-md-10">
	  			<h5>{this.props.params.number} Resultados Para {this.props.params.postcode}</h5>
	  		</div>
    	);
	}
});
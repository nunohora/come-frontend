import React from 'react';

module.exports = React.createClass({
	render() {
	  	return (
	  		<div className="col-md-10">
	  			<h5>{this.props.params.number} resultados para {this.props.params.postcode}</h5>
	  		</div>
    	);
	}
});
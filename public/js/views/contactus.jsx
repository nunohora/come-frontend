/** @jsx React.DOM */
define(function (require) {
	var React = require('react');

	var ContactUs = React.createClass({
		render: function () {
		  	return (
		      <div className="map-section">
		        <div id="map_canvas"></div>
		      </div>
		    );
		}
	});

	return ContactUs;
});
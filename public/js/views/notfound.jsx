/** @jsx React.DOM */
define(function (require) {
	var React = require('react');

	var NotFound = React.createClass({
		render: function () {
		  return (
      			<div>404 Not found!</div>
		    );
		}
	});

	return NotFound;
});
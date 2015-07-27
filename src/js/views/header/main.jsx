/** @jsx React.DOM */
var React = require('react'),
	Link  = require('react-router').Link;

var HeaderTopBar    = require('./header-top-bar.jsx'),
	HeaderNavBar    = require('./header-nav-bar.jsx');

module.exports = React.createClass({
	render: function () {
	  	return (
	      <header id="header">
			<HeaderTopBar />
			<HeaderNavBar />
		</header>
	    );
	}
});
/** @jsx React.DOM */
var React = require('react'),
	Link  = require('react-router').Link;

var HeaderTopBar    = require('./header-top-bar'),
	HeaderNavBar    = require('./header-nav-bar'),
	HeaderBottomBar = require('./header-bottom-bar');

module.exports = React.createClass({
	render: function () {
	  	return (
	      <header id="header">
			<HeaderTopBar />
			<HeaderNavBar />
			<HeaderBottomBar />
		</header>
	    );
	}
});
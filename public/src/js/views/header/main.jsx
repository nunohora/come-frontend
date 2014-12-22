/** @jsx React.DOM */
define(function (require) {
	var React = require('react'),
		Link  = require('react-router').Link;

	var HeaderTopBar    = require('views/header/header-top-bar'),
		HeaderNavBar    = require('views/header/header-nav-bar'),
		HeaderBottomBar = require('views/header/header-bottom-bar');

	return React.createClass({
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
});
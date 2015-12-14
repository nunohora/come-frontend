import React from 'react';
import HeaderTopBar from './header-top-bar.jsx';
import HeaderNavBar from './header-nav-bar.jsx';

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
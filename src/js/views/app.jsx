import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Footer from './footer.jsx';
import Header from './header/main.jsx';

module.exports = React.createClass({

	render: function () {
	  	return (
	  		<div>
	      		<Header />
	      		<ReactCSSTransitionGroup
					className="page-content"
					transitionName="page-transition"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					{this.props.children}
	      		</ReactCSSTransitionGroup>
	      		<Footer />
      		</div>
	    );
	}
});
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { RouteHandler} from 'react-router';
import Footer from './footer.jsx';
import Header from './header/main.jsx';

module.exports = React.createClass({

	render: function () {
	  	return (
	  		<div id="main-wrapper">
	      		<Header />
	      		<ReactCSSTransitionGroup transitionName="page-transition" component="div" className="page-content">
	      			<RouteHandler key={this.props.path} params={this.props.params}/>
	      		</ReactCSSTransitionGroup>
	      		<Footer />
      		</div>
	    );
	}
});
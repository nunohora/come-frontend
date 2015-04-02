/** @jsx React.DOM */
var React = require('react'),
	Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
	  	return (
			<div className="small-menu">
				<ul className="list-unstyled list-inline">
					<li><a href="#">Home</a>
					</li>
					<li><i className="fa fa-chevron-right"></i>
					</li>
					<li><a href="our-team.html">sdfsdf</a>
					</li>
				</ul>
			</div>
		);
	}
});
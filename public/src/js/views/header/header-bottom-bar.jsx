/** @jsx React.DOM */
define(function (require) {
	var React = require('react'),
		Link = require('react-router').Link;

	return React.createClass({
		render: function () {
		  	return (
				<div className="small-menu">
					<ul className="list-unstyled list-inline">
						<li><a href="#">Home</a>
						</li>
						<li><i className="fa fa-chevron-right"></i>
						</li>
						<li><a href="our-team.html">Team</a>
						</li>
					</ul>
				</div>
			);
		}
	});
});
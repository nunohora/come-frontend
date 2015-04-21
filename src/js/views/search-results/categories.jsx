/** @jsx React.DOM */
var React = require('react'),
	_     = require('underscore');

module.exports = React.createClass({

	renderCategories: function () {
		console.log(this.props.params);

		return _.map(this.props.params, function (category) {
			return (
				<li key={category.id}>
					<a href="#">{category.name}</a>
				</li>
			);
		});
	},

	render: function () {
	  return (
	  	<div className="side-panel">
			<div className="categories">
				<h4>Categorias</h4>
				<ul className="list-unstyled">
					{this.renderCategories()}
				</ul>
			</div>
		</div>
	    );
	}
});
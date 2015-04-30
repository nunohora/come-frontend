/** @jsx React.DOM */
var React = require('react'),
	Link  = require('react-router').Link,
	_     = require('underscore');

module.exports = React.createClass({

	renderCategories: function () {
		return _.map(this.props.params, function (category) {
			return (
				<li key={category.id}>
					<Link to="/">
						{category.name}
						<span className="tag">{category.resultNumber}</span>
					</Link>
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
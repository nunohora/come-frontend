/** @jsx React.DOM */
var React = require('react'),
	Link  = require('react-router').Link,
    slug  = require('slug'),
	_     = require('underscore');

module.exports = React.createClass({

    buildUrl: function (category) {
        var location = this.props.params.location,
			rep = '/search/' + location + '/',
			catSlug;

        if (category.name !== 'Total') {
			catSlug = slug(category.name, {lower: true});

			rep += catSlug + '/' + category.id;
        }

        return rep;
    },

	renderCategories: function () {
		return _.map(this.props.params.categories, function (category) {
			return (
				<li key={category.id}>
					<Link to={this.buildUrl(category)}>
						{category.name}
						<span className="tag">{category.resultNumber}</span>
					</Link>
				</li>
			);
		}, this);
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
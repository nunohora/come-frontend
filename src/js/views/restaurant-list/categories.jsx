import React from 'react';
import { Link } from 'react-router';
import slug from 'slug';
import _ from 'underscore';

module.exports = React.createClass({

    buildUrl(category) {
        let location = this.props.params.location,
			rep = '/search/' + location,
			catSlug;

        if (category.name !== 'Total') {
			catSlug = '/' + slug(category.name, {lower: true});

			rep += catSlug + '/' + category.id;
        }

        return rep;
    },

	renderCategories() {
		const id = this.props.params.selected || 0;

		return _.map(this.props.params.categories, category => {
			const className= 'tag ' + (id === category.id ? 'selected' : '');

			return (
				<li key={category.id}>
					<Link to={this.buildUrl(category)}>
						{category.name}
						<span className={className}>{category.resultNumber}</span>
					</Link>
				</li>
			);
		}, this);
	},

	render() {
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
import React from 'react';
import _ from 'underscore';
import RestaurantListItem from './restaurant-list-item.jsx';

module.exports = React.createClass({

	renderRestaurants() {
		return _.map(this.props.params, restaurant => {
			return (
				<RestaurantListItem key={restaurant.id} params={restaurant} />
			);
		});
	},

	render() {
		return (
			<div className="col-md-9">
				{this.renderRestaurants()}
			</div>
	    );
	}
});
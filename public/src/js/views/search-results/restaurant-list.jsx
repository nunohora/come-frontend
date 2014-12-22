/** @jsx React.DOM */
define(function (require) {
	var React 			   = require('react'),
		_			       = require('underscore'),
		RestaurantListItem = require('views/search-results/restaurant-list-item');

	return React.createClass({

		renderRestaurants: function () {
			return _.map(this.props.params, function (restaurant) {
				return (
					<RestaurantListItem key={restaurant.id} params={restaurant} />
				);
			});
		},

		render: function () {
			return (
				<div className="col-md-9">
					{this.renderRestaurants()}
				</div>
		    );
		}
	});
});
/** @jsx React.DOM */
define(function (require) {
	var React 			   = require('react'),
		_			       = require('underscore'),
		RestaurantListItem = require('jsx!views/search-results/restaurant-list-item');
	
	return React.createClass({

		renderRestaurants: function () {
			return _.map(this.props.params, function (restaurant) {
				return (
					<RestaurantListItem params={restaurant} />
				);
			});
		},

		render: function () {
			return (
				<div className="col-md-9 col-sm-12 col-xs-12">
					{this.renderRestaurants()}
				</div>
		    );
		}
	});
});
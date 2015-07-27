/** @jsx React.DOM */
var React 			   = require('react'),
	_			       = require('underscore'),
	RestaurantListItem = require('./restaurant-list-item.jsx');

module.exports = React.createClass({

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
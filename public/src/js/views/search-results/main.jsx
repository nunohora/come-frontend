/** @jsx React.DOM */
define(function (require) {
	var React 		   = require('react'),
		RestaurantList = require('views/search-results/restaurant-list'),
		Categories 	   = require('views/search-results/categories');

	var endpoint = '/api/postcode/';

	return React.createClass({

		getInitialState: function () {
			return {
				categories: [],
				restaurants: []
			};
		},

		componentDidMount: function () {
			var pcode = this.props.params.pcode;

			$.getJSON(endpoint + pcode, function (result) {
				if (this.isMounted()) {
					this.setState({
						categories: [],
						restaurants: result
					});
				}

			}.bind(this));
		},

		renderCategories: function () {
			return (
				<Categories params={this.state.categories} />
			);
		},

		renderRestaurantsList: function () {
			return (
				<RestaurantList params={this.state.restaurants} />
			);
		},

		render: function () {
		  	return (
	  			<div className="container">
		  			<div className="col-md-3 col-sm-12 col-xs-12">
						{this.renderCategories()}
					</div>
					{this.renderRestaurantsList()}
	  			</div>
		    );
		}
	});
});
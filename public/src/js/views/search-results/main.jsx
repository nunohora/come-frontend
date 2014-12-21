/** @jsx React.DOM */
define(function (require) {
	var React 		   = require('react'),
		RestaurantList = require('views/search-results/restaurant-list'),
		Categories 	   = require('views/search-results/categories'),
		ResultNumber   = require('views/search-results/result-number');

	var endpoint = '/api/postcode/';

	return React.createClass({

		getInitialState: function () {
			return {
				categories: [],
				restaurants: [],
				resultNumber: {
					number: '',
					postcode: ''
				}
			};
		},

		componentDidMount: function () {
			var pcode = this.props.params.pcode;

			$.getJSON(endpoint + pcode, function (result) {
				if (this.isMounted()) {
					this.setState({
						categories: [],
						restaurants: result,
						resultNumber: {
							number: result.length,
							postcode: pcode
						}
					});
				}

			}.bind(this));
		},

		renderResultNumber: function () {
			return (
				<ResultNumber params={this.state.resultNumber} />
			);
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
	  				{this.renderResultNumber()}
		  			<div className="col-md-3">
						{this.renderCategories()}
					</div>
					{this.renderRestaurantsList()}
	  			</div>
		    );
		}
	});
});
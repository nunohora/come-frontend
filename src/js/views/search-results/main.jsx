/** @jsx React.DOM */
var $			   = require('jquery'),
	_              = require('underscore'),
	utils          = require('utils'),
	React          = require('react'),
	Loader         = require('react-loader'),
	RestaurantList = require('views/search-results/restaurant-list'),
	Categories     = require('views/search-results/categories'),
	ResultNumber   = require('views/search-results/result-number');

module.exports = React.createClass({

	getInitialState: function () {
		return {
			categories: [],
			restaurants: [],
			resultNumber: {
				number: '',
				postcode: ''
			},
			loaded: false
		};
	},

	onResponse: function (results) {
		var categories = [{
			id: 0,
			name: 'All',
			resultNumber: results.length
		}];

		_.each(results, function (result) {
			_.each(result.categories, function (category) {
				var existing = _.findWhere(categories, {id: category.id});

				if (existing) {
					existing.resultNumber = existing.resultNumber++;
				}
				else {
					categories.push({
						id: category.id,
						name: category.name,
						resultNumber: 1
					});
				}
			});
		});

		this.setState({
			categories: categories,
			restaurants: results,
			resultNumber: {
				number: results.length,
				postcode: this.props.params.location
			},
			loaded: true
		});
	},

	componentWillMount: function () {
		$.when(utils.getRestaurants(this.props.params))
		.then(function (response) {
			if (this.isMounted()) {
				this.onResponse(response.search);
			}
		}.bind(this));
	},

	renderResultNumber: function () {
		return (
			<ResultNumber key={'res-numb'} params={this.state.resultNumber} />
		);
	},

	renderCategories: function () {
		return (
			<Categories params={this.state.categories} />
		);
	},

	renderRestaurantsList: function () {
		return (
			<RestaurantList key={'res-list'} params={this.state.restaurants} />
		);
	},

	render: function () {
	  	return (
  			<div className="container">
  				<Loader loaded={this.state.loaded} className="spinner "></Loader>
  				{this.renderResultNumber()}
	  			<div className="col-md-3">
					{this.renderCategories()}
				</div>
				{this.renderRestaurantsList()}
  			</div>
	    );
	}
});
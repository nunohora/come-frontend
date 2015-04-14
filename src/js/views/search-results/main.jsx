/** @jsx React.DOM */
var $			   = require('jquery'),
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

	componentWillMount: function () {
		var pcode = this.props.params.pcode;

		$.when(utils.getRestaurants(pcode))
		.then(function (result) {
			if (this.isMounted()) {
				this.setState({
					categories: [],
					restaurants: result,
					resultNumber: {
						number: result.length,
						postcode: pcode
					},
					loaded: true
				});
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
			<Categories key={'cat'} params={this.state.categories} />
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
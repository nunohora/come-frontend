/** @jsx React.DOM */
var $			   = require('jquery'),
	_              = require('underscore'),
	utils          = require('utils'),
	React          = require('react'),
	Loader         = require('react-loader'),
	RestaurantList = require('views/search-results/restaurant-list'),
	Categories     = require('views/search-results/categories'),
	ResultNumber   = require('views/search-results/result-number'),
	RestListStore  = require('stores/RestaurantListStore');

module.exports = React.createClass({

	getInitialState: function () {
		this.setState({ loaded: false });

		return getListState();
	},

	getListState: function () {
		return {
			categories: RestListStore.getCatList(),
			restaurants: RestListStore.getRestList(),
			resultNumber: RestListStore.getResultNumber()
		}
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

	componentDidMount: function () {
		RestListStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		RestListStore.removeChangeListener(this._onChange);
	},

	render: function () {
	  	return (
  			<div className="container">
  				<Loader loaded={this.state.loaded} className="spinner "></Loader>
  				<ResultNumber params={this.state.resultNumber} />
	  			<div className="col-md-3">
					<Categories params={this.state.categories} />
				</div>
				<RestaurantList params={this.state.restaurants} />
  			</div>
	    );
	},

	_onChange: function() {
		this.setState(getListState());
	}
});
/** @jsx React.DOM */
var React          = require('react'),
	Loader         = require('react-loader'),
	RestaurantList = require('views/restaurant-list/restaurant-list'),
	Categories     = require('views/restaurant-list/categories'),
	ResultNumber   = require('views/restaurant-list/result-number'),
	RestListStore  = require('stores/RestaurantListStore'),
	Actions        = require('actions/RestaurantListActions');

module.exports = React.createClass({

	getInitialState: function () {
		var state = this.getListState();
		state.loaded = false;

		return state;
	},

	getListState: function () {
		return RestListStore.getState();
	},

	componentDidMount: function () {
        var location = this.props.params.location;

		RestListStore.addChangeListener(this._onChange);
		Actions.getRestListByLocation(location);
	},

	componentWillUnmount: function() {
		RestListStore.removeChangeListener(this._onChange);
	},

    getFilteredResults: function (category) {
        return RestListStore.filterByCategory(category);
    },

    getCategories: function () {
        return RestListStore.getCategories();
    },


	render: function () {
        var list = this.getFilteredResults(this.props.params.id),
            categories = this.getCategories();

        var categoriesObj = {
            categories: categories,
            location: this.props.params.location
        };

	  	return (
  			<div className="container">
  				<Loader loaded={this.state.loaded} className="spinner "></Loader>
  				<ResultNumber params={this.state.resultNumber} />
	  			<div className="col-md-3">
					<Categories params={categoriesObj} />
				</div>
				<RestaurantList params={list} />
  			</div>
	    );
	},

	_onChange: function() {
		this.setState({loaded: true});
	}
});
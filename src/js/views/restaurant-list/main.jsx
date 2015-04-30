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
		RestListStore.addChangeListener(this._onChange);
		Actions.getRestList(this.props.params);
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
		this.setState(this.getListState());
		this.setState({loaded: true});
	}
});
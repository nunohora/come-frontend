/** @jsx React.DOM */
var React = require('react'),
	Loader = require('react-loader'),
	//Sidepanel = require('./sidepanel.jsx');
	RestStore = require('../../stores/RestaurantStore'),
	Actions = require('../../actions/RestaurantActions');

module.exports = React.createClass({

	getInitialState: function () {
		var state = RestStore.getState();

		state.loaded = false;

		return state;
	},

	componentDidMount: function () {
		RestStore.addChangeListener(this._onChange);
		Actions.getRestById(this.props.params.id);
	},

	componentWillUnmount: function () {
		RestStore.removeChangeListener(this._onChange);
	},

	render: function () {
	  	return (
  			<div className="container">
				<div class="col-md-3 col-sm-12 col-xs-12 col-md-pull-9">
				</div>
  			</div>
	    );
	},

	_onChange: function() {
		this.setState({loaded: true});
	}
});
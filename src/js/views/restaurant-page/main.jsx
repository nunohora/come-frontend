import React from 'react';
import Loader from 'react-router';
//import Sidepanel from './sidepanel';
import RestStore from '../../stores/RestaurantStore';
import Actions from '../../actions/RestaurantActions';

module.exports = React.createClass({

	getInitialState() {
		let state = RestStore.getState();

		state.loaded = false;

		return state;
	},

	componentDidMount() {
		RestStore.addChangeListener(this._onChange);
		Actions.getRestById(this.props.params.id);
	},

	componentWillUnmount() {
		RestStore.removeChangeListener(this._onChange);
	},

	render() {
	  	return (
  			<div className="container">
				<div class="col-md-3 col-sm-12 col-xs-12 col-md-pull-9">
				</div>
  			</div>
	    );
	},

	_onChange() {
		this.setState({loaded: true});
	}
});
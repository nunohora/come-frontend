import React from 'react';
import Loader from 'react-loader';
import RestaurantList from './restaurant-list.jsx';
import Categories from './categories';
import ResultNumber from './result-number';
import RestListStore from '../../stores/RestaurantListStore';
import Actions from '../../actions/RestaurantListActions';

module.exports = React.createClass({

	getInitialState() {
		let state = RestListStore.getState();

		state.loaded = false;

		return state;
	},

	componentDidMount() {
		RestListStore.addChangeListener(this._onChange);
		Actions.getRestListByLocation(this.props.params.location);
	},

	componentWillUnmount() {
		RestListStore.removeChangeListener(this._onChange);
	},

    getCategories() {
        return RestListStore.getCategories();
    },

	render() {
        const categoriesObj = {
            categories: this.getCategories(),
            location: this.props.params.location,
			selected: this.props.params.id
        };

	  	return (
  			<div className="container">
  				<Loader loaded={this.state.loaded} className="spinner "></Loader>
  				<ResultNumber params={RestListStore.getResultNumber()} />
	  			<div className="col-md-3">
					<Categories params={categoriesObj} />
				</div>
				<RestaurantList params={RestListStore.filterByCategory(this.props.params.id)} />
  			</div>
	    );
	},

	_onChange() {
		this.setState({loaded: true});
	}
});
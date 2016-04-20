import React, { PropTypes } from 'react'
import RestaurantListItem from 'components/RestaurantListItem/RestaurantListItem'

export default class RestaurantList extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    renderRestaurants(restaurant) {
        return (
            <RestaurantListItem
                id={ restaurant.id }
                name={ restaurant.name }
                address={ restaurant.address }
                categories = { restaurant.categories } />
        )
    }

    render() {
        return (
            <div className="col-md-9">
                { this.props.list.map(restaurant => ( this.renderRestaurants(restaurant))) }
            </div>
        );
    }
}
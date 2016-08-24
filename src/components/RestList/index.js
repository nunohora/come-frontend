import React, { PropTypes } from 'react'
import RestaurantListItem from 'components/RestListItem'

export default class RestaurantList extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    renderRestaurants(restaurant) {
        return (
            <RestaurantListItem
                key={ restaurant.id }
                id={ restaurant.id }
                name={ restaurant.name }
                address={ restaurant.zone_name }
                categories = { restaurant.categories } />
        )
    }

    render() {
        return (
            <div>
                {this.props.list.map(restaurant => ( this.renderRestaurants(restaurant)))}
            </div>
        )
    }
}
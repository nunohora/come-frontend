import React, { PropTypes } from 'react'
import MenuItem from 'components/MenuItem'

export default class RestaurantMenu extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    renderRestaurants(restaurant) {
        return (
            <MenuGroup />
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
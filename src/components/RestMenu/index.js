import React, { PropTypes } from 'react'
import MenuItem from 'components/MenuItem'

export default class RestaurantMenu extends React.Component {

    static propTypes = {
        productList: PropTypes.array.isRequired
    }

    renderRestaurants(restaurant) {
        return (
            <MenuGroup />
        )
    }

    render() {
        return (
            <div className="col-md-9">
                { this.productList.map(restaurant => ( this.renderRestaurants(restaurant))) }
            </div>
        );
    }
}
import React, { PropTypes } from 'react'

export default class RestaurantMenu extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="col-md-9">
                <div></div>
            </div>
        )
    }
}
import React, { PropTypes } from 'react'

export default class RestaurantHeader extends React.Component {

    static propTypes = {
        meta: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="col-md-9">
                <div></div>
            </div>
        )
    }
}
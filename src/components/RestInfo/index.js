import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import Loader from 'react-loader'

export class RestaurantInfo extends React.Component {
    render() {
        console.log('info')
        return (
            <div className="container">
                <div className="col-md-3 col-sm-12 col-xs-12 col-md-pull-9">
                    Info
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    info: state.restaurant.info
})

export default connect(mapStateToProps, null)(RestaurantInfo)
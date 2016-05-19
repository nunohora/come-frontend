import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getRestaurantDetails } from 'redux/modules/restaurant'
import Loader from 'react-loader'
import MenuCategories from 'components/MenuCategories/MenuCategories'
import RestaurantInfo from 'components/RestInfo/RestInfo'
import RestaurantReviews from 'components/RestReviews/RestReviews'
import RestaurantMenu from 'components/RestMenu/RestMenu'

class Restaurant extends React.Component {

    static propTypes = {
        getRestaurantDetails: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.getRestaurantDetails(this.props.postcode)
    }

    render() {
        return (
            <div className="container">
                <Loader loaded={ !props.isFetching } className="spinner"></Loader>
                <div className="col-md-3">
                    <MenuCategories />
                </div>
                <RestaurantMenu />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    menuCategories: state.restaurant.categories,
    id: props.params.id
})

const mapDispatchToProps= (dispatch) => ({
    getRestListByLocation: (props) => { getRestListByLocation(dispatch, props) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)
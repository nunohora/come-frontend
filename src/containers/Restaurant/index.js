import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getRestaurantDetails } from 'redux/modules/restaurant'
import Loader from 'react-loader'
import MenuCategories from 'components/MenuCategories'
import RestaurantInfo from 'components/RestInfo'
import RestaurantReviews from 'components/RestReviews'
import RestaurantMenu from 'components/RestMenu'

class Restaurant extends React.Component {

    static propTypes = {
        getRestaurantDetails: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.getRestaurantDetails(this.props.id)
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
    getRestaurantDetails: (id) => { getRestaurantDetails(dispatch, id) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)
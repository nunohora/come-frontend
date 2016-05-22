import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getRestaurant } from 'redux/modules/restaurant'
import Loader from 'react-loader'
import MenuCategories from 'components/MenuCategories'
import RestaurantMenu from 'components/RestMenu'

class Restaurant extends React.Component {

    static propTypes = {
        getRestaurant: PropTypes.func.isRequired,
        menuCategories: PropTypes.array.isRequired,
        productList: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired
    }

    componentWillMount() {
        this.props.getRestaurant(this.props.id)
    }

    render() {
        const { props } = this

        return (
            <div className="container">
                <Loader loaded={!props.isFetching} className="spinner"></Loader>
                <div className="col-md-3">
                    <MenuCategories categories={props.menuCategories} />
                </div>
                <RestaurantMenu list={props.productList} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    menuCategories: state.restaurant.menuCategories,
    productList: state.restaurant.productList,
    meta: state.restaurant.meta,
    id: props.params.id
})

const mapDispatchToProps= (dispatch) => ({
    getRestaurant: (id) => { getRestaurant(dispatch, id) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)
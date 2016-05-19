import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getRestListByLocation } from 'redux/modules/restaurantList'
import Loader from 'react-loader'
import RestaurantList from 'components/RestaurantList/RestaurantList'
import Categories from 'components/Categories/Categories'
import ResultNumber from 'components/ResultNumber/ResultNumber'

class SearchResult extends React.Component {

    static propTypes = {
        getRestListByLocation: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        postcode: PropTypes.string.isRequired,
        id: PropTypes.number,
        categories: PropTypes.array.isRequired,
        list: PropTypes.array.isRequired,
        number: PropTypes.number.isRequired
    }

    componentWillMount() {
        this.props.getRestListByLocation(this.props.postcode)
    }

    filterByCategory(catId, list) {
        return list.filter(restaurant => {
            return restaurant.categories.some(cat => {
                return parseInt(catId, 10) === cat.id
            })
        })
    }

    render() {
        const { props } = this

        console.log(props.isFetching)

        return (
            <div className="container">
                <Loader loaded={ !props.isFetching } className="spinner"></Loader>
                <ResultNumber number={ props.number } postcode={ props.postcode }/>
                <div className="col-md-3">
                    <Categories categories={ props.categories } postcode={ props.postcode }/>
                </div>
                <RestaurantList list={ props.id ? this.filterByCategory(props.id, props.list) : props.list } />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurantList.isFetching,
    categories: state.restaurantList.categories,
    list: state.restaurantList.list,
    number: state.restaurantList.number,
    postcode: props.params.location,
    id: props.params.id
})

const mapDispatchToProps= (dispatch) => ({
    getRestListByLocation: (props) => { getRestListByLocation(dispatch, props) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
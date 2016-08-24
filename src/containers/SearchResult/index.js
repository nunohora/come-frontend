import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getRestListByLocation } from 'redux-store/modules/restaurantList'
import Loader from 'react-loader'
import RestaurantList from 'components/RestList'
import Categories from 'components/Categories'
import ResultNumber from 'components/ResultNumber'

class SearchResult extends React.Component {

    static propTypes = {
        getRestListByLocation: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        postcode: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        list: PropTypes.array.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.number
    }

    componentWillMount() {
        this.props.getRestListByLocation(this.props.postcode)
    }

    filterByCategory(id, list) {
        return list.filter(restaurant => {
            return restaurant.categories.some(cat => {
                return id === cat.id
            })
        })
    }

    render() {
        const { props } = this

        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-md-push-3">
                            <RestaurantList list={ props.id ? this.filterByCategory(props.id, props.list) : props.list } />
                        </div>
                        <div className="col-md-3 col-md-pull-9 hidden-sm">
                            <ResultNumber number={ props.number } postcode={ props.postcode }/>
                            <Categories categories={ props.categories } postcode={ props.postcode }/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurantList.isFetching,
    categories: state.restaurantList.categories,
    list: state.restaurantList.list,
    number: state.restaurantList.number,
    postcode: props.params.location,
    id: parseInt(props.params.id, 10)
})

const mapDispatchToProps = dispatch => ({
    getRestListByLocation: (props) => { getRestListByLocation(dispatch, props) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
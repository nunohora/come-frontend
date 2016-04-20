import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getRestListByLocation } from 'redux/modules/restaurantList'
import Loader from 'react-loader'
import RestaurantList from 'components/RestaurantList/RestaurantList'
import Categories from 'components/Categories/Categories'
import ResultNumber from 'components/ResultNumber/ResultNumber'

class SearchResult extends React.Component {

    static propTypes = {
        loaded: PropTypes.bool.isRequired,
        postcode: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        list: PropTypes.array.isRequired,
        number: PropTypes.number.isRequired
    }

    componentWillMount() {
        this.props.getRestListByLocation(this.props.postcode)
    }
    render() {
        return (
            <div className="container">
                <Loader loaded={this.props.loaded} className="spinner"></Loader>
                <ResultNumber number={this.props.number} postcode={this.props.postcode}/>
                <div className="col-md-3">
                    <Categories categories={this.props.categories} postcode={this.props.postcode}/>
                </div>
                <RestaurantList list={this.props.list} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    loaded: state.loaded,
    categories: state.restaurantList.categories,
    list: state.restaurantList.list,
    number: state.restaurantList.number,
    postcode: props.params.location
})

const mapDispatchToProps = (dispatch, props) => ({
    getRestListByLocation: () => { getRestListByLocation(dispatch, props.params.location) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
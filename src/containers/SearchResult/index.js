import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getRestListByLocation } from 'redux-store/modules/restaurantList'
import { FormattedMessage } from 'react-intl'
import Loader from 'react-loader'
import RestaurantList from 'components/RestList'
import Categories from 'components/Categories'
import ResultNumber from 'components/ResultNumber'

let TiChevronLeft = require('react-icons/lib/ti/chevron-left')

class SearchResult extends React.Component {

    static propTypes = {
        getRestListByLocation: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        postcode: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        list: PropTypes.array.isRequired,
        number: PropTypes.number.isRequired,
        routes: PropTypes.array.isRequired,
        id: PropTypes.number
    }

    componentWillMount() {
        this.props.getRestListByLocation(this.props.postcode)
    }

    sortBy() {
    }

    filterByCategory(slug, list) {
        return list.filter(restaurant => {
            return restaurant.food_categories.some(cat => {
                return slug === cat.slug
            })
        })
    }

    render() {
        const { props } = this

        return (
            <div className="row normal-container">
                <Loader loaded={!this.props.isFetching}>
                    <div className="col-md-9 col-md-push-3">
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <div className="select-option">
                                    <TiChevronLeft size={20} className="icon dropdown-arrow select" />
                                    <select>
                                        <FormattedMessage id="SORT_BY">
                                            {message => <option value="">{message}</option>}
                                        </FormattedMessage>
                                        <FormattedMessage id="DISTANCE">
                                            {message => <option value="Small">{message}</option>}
                                        </FormattedMessage>
                                        <FormattedMessage id="RATING">
                                            {message => <option value="Medium">{message}</option>}
                                        </FormattedMessage>
                                        <FormattedMessage id="NEWEST_FIRST">
                                            {message => <option value="Larger">{message}</option>}
                                        </FormattedMessage>
                                        <FormattedMessage id="RESTAURANT_NAME">
                                            {message => <option value="Larger">{message}</option>}
                                        </FormattedMessage>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xs-8 col-md-8 text-right">
                                <ResultNumber number={ props.number } postcode={ props.postcode }/>
                            </div>
                        </div>
                        <div className="row">
                            <RestaurantList list={ props.slug ? this.filterByCategory(props.slug, props.list) : props.list } />
                        </div>
                    </div>
                    <div className="col-md-3 col-md-pull-9 hidden-sm">
                        <Categories categories={ props.categories } postcode={ props.postcode }/>
                    </div>
                </Loader>
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
    slug: props.params.slug
})

const mapDispatchToProps = dispatch => ({
    getRestListByLocation: (props) => { getRestListByLocation(dispatch, props) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
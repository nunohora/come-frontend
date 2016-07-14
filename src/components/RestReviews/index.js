import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { getRestaurantReviews } from 'redux-store/modules/restaurant'
import Loader from 'react-loader'
import styles from './styles.scss'

export class RestaurantReviews extends React.Component {

    static propTypes = {
        getRestaurantReviews: PropTypes.func.isRequired,
        reviews: PropTypes.array.isRequired
    }

    componentWillMount() {
        if (!this.props.reviews.length)  {
            this.props.getRestaurantReviews(this.props.id)
        }
    }

    renderReviewList(list = []) {
        return list.map((item, index) => {
            return (
                <li key={index}>review</li>
            )
        })
    }

    render() {
        return (
            <div>
                <h5>Reviews</h5>
                {this.renderReviewList(this.props.reviews)}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    reviews: state.restaurant.reviews
})

const mapDispatchToProps= (dispatch) => ({
    getRestaurantReviews: (id) => { getRestaurantReviews(dispatch, id) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(RestaurantReviews, styles))
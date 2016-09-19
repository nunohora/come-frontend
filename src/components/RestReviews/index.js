import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Rating from 'react-rating'
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
        this.props.getRestaurantReviews(this.props.params.slug)
    }

    renderReviewList(list = []) {
        return list.map((item, index) => {
            return (
                <li key={index}>
                    <div styleName="reviewer">{item.reviewer}</div>
                    <Rating 
                        empty="small-star empty-star"
                        full="small-star full-star"
                        readonly={true} 
                        fractions={3} 
                        initialRate={parseInt(item.rating, 10)} />
                    <p>{item.description}</p>
                </li>
            )
        })
    }

    render() {
        return (
            <ul styleName="reviews">
                {this.renderReviewList(this.props.reviews)}
            </ul>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    reviews: state.restaurant.reviews
})

const mapDispatchToProps= (dispatch) => ({
    getRestaurantReviews: (slug) => { getRestaurantReviews(dispatch, slug) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(RestaurantReviews, styles))
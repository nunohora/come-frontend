import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Rating from 'react-rating'
import { connect } from 'react-redux'
import { getRestaurantReviews } from 'redux-store/modules/restaurant'
import Loader from 'react-loader'
import moment from 'moment'
import styles from './styles.scss'

export class RestaurantReviews extends React.Component {

    static propTypes = {
        getRestaurantReviews: PropTypes.func.isRequired,
        reviews: PropTypes.array.isRequired,
        isFetchingReviews: PropTypes.bool.isRequired
    }

    componentWillMount() {
        this.props.getRestaurantReviews(this.props.params.slug)
    }

    renderReviewList(list = []) {
        return list.map((item, index) => {
            return (
                <li key={index}>
                    <div>
                        <span styleName="reviewer">{item.reviewer}</span>
                        <span styleName="date">
                            {moment(item.date).format('DD/MM/YYYY')}
                        </span>
                    </div>
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
            <Loader loaded={!this.props.isFetchingReviews}>
                <ul styleName="reviews">
                    {this.renderReviewList(this.props.reviews)}
                </ul>
            </Loader>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetchingReviews: state.restaurant.isFetchingReviews,
    reviews: state.restaurant.reviews
})

const mapDispatchToProps= (dispatch) => ({
    getRestaurantReviews: (slug) => { getRestaurantReviews(dispatch, slug) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(RestaurantReviews, styles))
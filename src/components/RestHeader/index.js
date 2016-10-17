import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Rating from 'react-rating'
import Image from 'img/blog-post.jpg'
import styles from './styles.scss'

let FaMap = require('react-icons/lib/fa/map')
let FaCutlery = require('react-icons/lib/fa/cutlery')
let FaClockO = require('react-icons/lib/fa/clock-o')

class RestaurantHeader extends React.Component {

    static propTypes = {
        meta: PropTypes.object.isRequired
    }

    renderRating(rating, number) {
        return (
            <div>
                <Rating
                    empty="small-star empty-star"
                    full="small-star full-star"
                    readonly={true}
                    fractions={3}
                    initialRate={parseFloat(rating)} />
                <span styleName="reviews-number">{number} reviews</span>
            </div>
        )
    }

    render() {
        const { meta } = this.props

        return (
            <div styleName="restaurant-header">
                <div styleName="header-img">
                    <img src={Image} alt={meta.name} />
                </div>
                <div styleName="rest-info">
                    <h3>{meta.name}</h3>
                    {this.renderRating(meta.rating, meta.num_reviews)}
                    <div styleName="address">
                        <FaMap size={15} />
                        <span>{meta.location.address} - {meta.location.city}</span>
                    </div>
                    <div>
                        <span styleName="tag-list">
                            <FaCutlery size={15} />
                            {meta.food_categories.map(cat => {
                                return <span key={cat.id} className="label label-warning" styleName="tag">{cat.name}</span>
                            })}
                        </span>
                        <span styleName="rest-open">
                            <FaClockO size={15} />
                            <span styleName="rest-open-text">Aberto</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantHeader, styles)
import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Rating from 'react-rating'
import Image from 'img/blog-post.jpg'
import styles from './styles.scss'

let FaMapMarker = require('react-icons/lib/fa/map-marker')
let FaCutlery = require('react-icons/lib/fa/cutlery')

class RestaurantHeader extends React.Component {

    static propTypes = {
        meta: PropTypes.object.isRequired
    }

    renderRating(rating) {
        return (
            <div>
                <Rating 
                    empty="small-star empty-star"
                    full="small-star full-star"
                    readonly={true} 
                    fractions={3} 
                    initialRate={rating} />
                <span styleName="reviews-number">(27 reviews)</span>
            </div>
        )
    }

    renderCategories(categories = []) {
        let string = ''

        categories.forEach(category => {
            string = string + category.name;

            if (categories.indexOf(category) + 1 !== categories.length) {
                string += ', '
            }
        })

        return (
            <div styleName="tag-list">
                <FaCutlery size={15} />
                <span>{string}</span>
            </div>
        )
    }

    render() {
        const { meta } = this.props

        return (
            <div styleName="restaurant-header">
                <div className="row">
                    <div className="col-md-5">
                        <img src={Image} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>{meta.name}</h2>
                        {this.renderRating(4.5)}
                        <div styleName="address">
                            <FaMapMarker size={20} />
                            <span>{meta.address}</span>
                        </div>
                        {this.renderCategories(meta.food_categories)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantHeader, styles)
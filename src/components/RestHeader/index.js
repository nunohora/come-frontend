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
                <div>
                    {rating} (27 reviews)
                </div>
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
            <div>
                <FaCutlery size={15} />
                {string}
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
                        <div className="address">
                            <p>
                                <FaMapMarker size={20} />
                                {meta.address}
                            </p>
                        </div>
                        <div className="tag-list">
                            {this.renderCategories(meta.food_categories)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantHeader, styles)
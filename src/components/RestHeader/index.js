import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Rating from 'react-rating'
import Image from 'img/blog-post.jpg'
import styles from './styles.scss'

let FaMapMarker = require('react-icons/lib/fa/map-marker')

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
                <span>{rating}</span>
                <span>27 reviews</span>
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
            <p>
                <i styleName="icon" className="fa fa-cutlery"></i>
                {string}
            </p>
        )
    }

    render() {
        const { meta } = this.props

        return (
            <div styleName="restaurant-header">
                <div className="row">
                    <div className="col-md-6">
                        <img src={ Image } alt="" />
                    </div>
                    <div className="col-md-6">
                        <h5>Restaurant O Aderito</h5>
                        {this.renderRating(4.5)}
                        <div className="address">
                            <p>
                                <FaMapMarker size={50} styleName="icon" />
                                {meta.address}
                            </p>
                        </div>
                        <div className="tag-list">
                            {this.renderCategories(meta.categories)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantHeader, styles)
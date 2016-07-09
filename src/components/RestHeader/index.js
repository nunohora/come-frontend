import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Rating from 'react-rating'
import Image from 'img/blog-post.jpg'
import styles from './styles.scss'

class RestaurantHeader extends React.Component {

    static propTypes = {
        meta: PropTypes.object.isRequired
    }

    renderRating(rating) {
        return (
            <Rating
                readonly="true"
                fractions={3}
                initialRate={rating}
                />
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
                { string }
            </p>
        )
    }

    render() {
        const { meta } = this.props

        return (
            <div styleName="restaurant-header">
                <div className="row">
                    <div className="col-md-3">
                        <img className="" src={ Image } alt="" />
                    </div>
                    <div className="col-md-6">
                        <h5>{meta.name}</h5>
                        {this.renderRating(meta.rating)}
                        <div className="address">
                            <p>
                                <i styleName="icon" className="fa fa-map-marker"></i>
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
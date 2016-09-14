import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import slug from 'slug'
import Rating from 'react-rating'
import CSSModules from 'react-css-modules'
import Image from 'img/blog-post.jpg'
import styles from './styles.scss'

let FaMapMarker = require('react-icons/lib/fa/map-marker')
let FaCutlery = require('react-icons/lib/fa/cutlery')
let TiThList = require('react-icons/lib/ti/th-list')

class RestaurantListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        slug: PropTypes.string.isRequired
    }

    renderRating(rating) {
        return (
            <div>
                <Rating 
                empty="small-star empty-star"
                full="small-star full-star"
                styleName="rating"
                readonly={true} 
                fractions={3} 
                initialRate={rating} />
                <span>
                    {rating} (27 reviews)
                </span>
            </div>
        )
    }

    renderCategories(categories = []) {
        let string = ''

        categories.forEach(category => {
            string = string + category.name

            if (categories.indexOf(category) + 1 !== categories.length) {
                string += ', '
            }
        })

        return (
            <p>
                <FaCutlery size={25} />
                {string}
            </p>
        )
    }

    render() {
        const { props } = this
        const url = `/places/${props.slug}`

        return (
            <div styleName="restaurant-list-item">
                <div className="row">
                    <div className="col-md-3">
                        <div styleName="restaurant-list-img">
                            <img className="" src={Image} alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h3>
                            <Link to={url}>
                                 {props.name}
                            </Link>
                        </h3>
                        {this.renderRating(3)}
                        <div className="address">
                            <FaMapMarker size={30} />
                            {props.address}
                        </div>
                        <div className="tag-list">
                            {this.renderCategories(props.categories)}
                        </div>
                    </div>
                    <Link to={url} styleName="see-menu" className="btn btn-filled">
                        <TiThList size={20} />
                        Ver Menu
                    </Link>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantListItem, styles)
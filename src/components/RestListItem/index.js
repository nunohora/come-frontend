import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import slug from 'slug'
import Rating from 'react-rating'
import CSSModules from 'react-css-modules'
import Image from 'img/blog-post.jpg'
import MediaQuery from 'react-responsive'
import styles from './styles.scss'

let FaMap = require('react-icons/lib/fa/map')
let FaCutlery = require('react-icons/lib/fa/cutlery')
let MdFormatListBulleted = require('react-icons/lib/md/format-list-bulleted')

class RestaurantListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string,
        categories: PropTypes.array.isRequired,
        slug: PropTypes.string.isRequired
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
                <span styleName="reviews-number">
                    (27 reviews)
                </span>
            </div>
        )
    }

    render() {
        const { props } = this
        const url = `/places/${props.slug}`

        return (
            <li className="row" styleName="rest-item">
                <div styleName="restaurant-list-img">
                    <img className="" src={Image} alt="" />
                </div>
                <div styleName="rest-info">
                    <h4 styleName="rest-name">
                        <Link to={url}>
                             {props.name}
                        </Link>
                    </h4>
                    {this.renderRating(3)}
                    <div styleName="address">
                        <FaMap size={15} />
                        <span>{props.address}</span>
                    </div>
                    <div styleName="tag-list">
                        <FaCutlery size={15} />
                        {props.categories.map(cat => {
                            return <span key={cat.id} className="label label-warning" styleName="tag">{cat.name}</span>
                        })}
                    </div>
                </div>
                <MediaQuery minWidth={767}>
                    <Link to={url} styleName="see-menu" className="btn btn-filled">
                        <MdFormatListBulleted size={20} />
                        <span>Ver Menu</span>
                    </Link>
                </MediaQuery>
                <Link to={url} styleName="see-menu-narrow" className="btn btn-filled visible-xs-block">
                    <MdFormatListBulleted size={20} />
                    <span>Menu</span>
                </Link>
            </li>
        )
    }
}

export default CSSModules(RestaurantListItem, styles)
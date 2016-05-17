import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import slug from 'slug'
import CSSModules from 'react-css-modules'
import Image from './blog-post.jpg'
import styles from './RestaurantListItem.scss'

class RestaurantListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired
    }

    renderRating() {
        return (
            <div styleName="rating">
                <span className="rating-stars">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </span>
                <span styleName="rating-number">
                    (27)
                </span>
            </div>
        );
    }

    renderCategories() {
        const categories = this.props.categories
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
        );
    }

    render() {
        const params = {
            id: this.props.id,
            slug: slug(this.props.name, {lower: true})
        };

        const url = `places/${params.id}/${params.slug}`

        return (
            <div styleName="restaurant-list-item">
                <div className="row">
                    <div className="col-md-3">
                        <div styleName="restaurant-list-img">
                            <img className="" src={ Image } alt="" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h5>
                            <Link to={ url }>
                                {this.props.name}
                            </Link>
                        </h5>
                        {this.renderRating()}
                        <div className="address">
                            <p>
                                <i styleName="icon" className="fa fa-map-marker"></i>
                                {this.props.address}
                            </p>
                        </div>
                        <div className="tag-list">
                            {this.renderCategories()}
                        </div>
                    </div>
                    <Link to={ url } styleName="see-menu" className="btn btn-default-red-inverse view-menu">
                        <i className="fa fa-list-ul"></i>
                        Ver Menu
                    </Link>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantListItem, styles)
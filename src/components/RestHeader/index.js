import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Image from 'img/blog-post.jpg'
import styles from './styles.scss'

class RestaurantHeader extends React.Component {

    static propTypes = {
        meta: PropTypes.object.isRequired
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
        );
    }

    render() {
        const { props } = this

        return (
            <div styleName="restaurant-header">
                <div className="row">
                    <div className="col-md-3">
                        <img className="" src={ Image } alt="" />
                    </div>
                    <div className="col-md-6">
                        <h5>{props.meta.name}</h5>
                        {this.renderRating()}
                        <div className="address">
                            <p>
                                <i styleName="icon" className="fa fa-map-marker"></i>
                                {props.meta.zone_name}
                            </p>
                        </div>
                        <div className="tag-list">
                            {this.renderCategories(props.meta.categories)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantHeader, styles)
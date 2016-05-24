import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

class RestaurantItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="item-list">
                <div className="list-image">
                    <img alt="" />
                </div>
                <div className="all-details">
                    <div className="visible-option">
                        <div className="details">
                            <h6>{}</h6>
                            <p className="m-with-details">
                                Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor,
                                et mollis pede metus eget nisi. Praesent sodales velit quis augue.
                            </p>
                        </div>
                        <div className="price-option fl">
                            <h4>$ 9.95</h4>
                            <button className="toggle">Option</button>
                        </div>
                        <div className="qty-cart text-center clearfix">
                            <button>
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantItem, styles)
import React, { PropTypes } from 'react'
import AddToCartButton from 'containers/AddToCartButton'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

class RestaurantMenuItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    }

    render() {
        const { item } = this.props

        return (
            <div className="item-list">
                <div className="all-details">
                    <div className="visible-option">
                        <div className="details">
                            <h6>{item.name}</h6>
                            <p className="m-with-details">
                                {item.description}
                            </p>
                        </div>
                        <div className="price-option fl">
                            <h4>£{item.price}</h4>
                        </div>
                        <div className="qty-cart text-center clearfix">
                            <AddToCartButton name={item.name} price={item.price} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantMenuItem, styles)
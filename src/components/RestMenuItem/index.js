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
            <li>
                <div styleName="top">
                    <h6 styleName="name">{item.name}</h6>
                    <div styleName="price">£{item.price}</div>
                    <div styleName="add-to-cart">
                        <AddToCartButton 
                        id={item.id} 
                        name={item.name} 
                        price={item.price} />
                    </div>
                </div>
                <div styleName="description"><p>{item.description}</p></div>
            </li>
        )
    }
}

export default CSSModules(RestaurantMenuItem, styles)
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
                <div>
                    <h6>{item.name}</h6>
                    <p>
                        {item.description}
                    </p>
                </div>
                <div>
                    <h4>£{item.price}</h4>
                </div>
                <div>
                    <AddToCartButton id={item.id} name={item.name} price={item.price} />
                </div>
            </li>
        )
    }
}

export default CSSModules(RestaurantMenuItem, styles)
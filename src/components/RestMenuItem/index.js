import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

let TiPlus = require('react-icons/lib/ti/plus')

class RestaurantMenuItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        addOrderItem: PropTypes.func.isRequired
    }

    render() {
        const { item } = this.props

        return (
            <div styleName="item">
                <div styleName="top">
                    <h6 styleName="name">{item.name}</h6>
                    <div styleName="price">€{item.price}</div>
                    <div styleName="add-to-cart">
                        <div styleName="add-to-cart-button">
                            <a className="btn btn-icon btn-filled" onClick={this.props.addOrderItem.bind(this, item)}>
                                <TiPlus />
                            </a>
                        </div>
                    </div>
                </div>
                <div styleName="description">
                    <p>{item.description}</p>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantMenuItem, styles)
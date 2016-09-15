import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addOrderItem } from 'redux-store/modules/shoppingCart'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

let TiPlus = require('react-icons/lib/ti/plus')

class AddToCartButton extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        addOrderItem: PropTypes.func.isRequired
    }

    handleClick() {
        const { id, name, price } = this.props

        this.props.addOrderItem({ id, name, price })
    }

    render() {
        return (
            <div styleName="add-to-cart-button">
                <a className="btn btn-icon btn-filled" onClick={this.handleClick.bind(this)}>
                    <TiPlus />
                </a>
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    addOrderItem: (props) => { addOrderItem(dispatch, props) }
})

export default connect(null, mapDispatchToProps)(CSSModules(AddToCartButton, styles))
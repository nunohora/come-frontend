import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeRadioButton } from 'redux-store/modules/shoppingCart'

class ShoppingCart extends React.Component {

    static propTypes = {
        orders: PropTypes.array.isRequired,
        subtotal: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        toCollect: PropTypes.bool.isRequired,
        deliveryFee: PropTypes.number.isRequired,
        changeRadioButton: PropTypes.func.isRequired
    }

    renderOrderItems() {
        const { props } = this

        return (
            <div>
                <ul>
                    {props.orders.map((order, index) => {
                        return <li key={index}>{order.name}</li>
                    })}
                </ul>
                <div>Subtotal: {props.subtotal}</div>
                <div>Taxa de entrega: {props.deliveryFee}</div>
                <div>Total: {props.total}</div>
            </div>
        )
    }

    onRadioButtonClick(toCollect) {
        this.props.changeRadioButton(toCollect)
    }

    renderEmptyShoppingCart() {
        return <div>O carrinho está vazio</div>
    }

    render() {
        const { props } = this

        let orderList

        console.log(props)
        
        if (props.orders.length) {
            orderList = this.renderOrderItems.bind(this)
        }
        else {
            orderList = this.renderEmptyShoppingCart
        }

        return (
            <div className="side-panel">
                <button className="btn btn-default-red-inverse" type="submit">
                    Checkout
                </button>
                <h6 className="title">O seu pedido</h6>
                <form>
                    <label>
                        <input
                            type="radio"
                            id="collect"
                            name="collect"
                            checked={props.toCollect}
                            onChange={this.onRadioButtonClick.bind(this, true)} />
                        Recolha
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="delivery"
                            name="delivery"
                            checked={!props.toCollect}
                            onChange={this.onRadioButtonClick.bind(this, false)} />
                        Entrega ao domicílio
                    </label>
                </form>
                {orderList()}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    orders: state.shoppingCart.orders,
    subtotal: state.shoppingCart.subtotal,
    total: state.shoppingCart.total,
    toCollect: state.shoppingCart.toCollect,
    deliveryFee: state.shoppingCart.deliveryFee
})

const mapDispatchToProps= (dispatch) => ({
    changeRadioButton: (toCollect) => { changeRadioButton(dispatch, toCollect) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
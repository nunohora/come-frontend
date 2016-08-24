import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ShoppingCartItem from 'containers/ShoppingCartItem'
import { changeRadioButton } from 'redux-store/modules/shoppingCart'

class ShoppingCart extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

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
                <table className="table">
                    <tbody>
                        {props.orders.map((order, index) => {
                            return <ShoppingCartItem
                                key={index}
                                id={order.id}
                                price={order.price}
                                name={order.name} />
                        })}
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Subtotal</th>
                            <td>{props.subtotal}</td>
                        </tr>
                        <tr>
                            <th scope="row">Taxa de entrega</th>
                            <td>{props.deliveryFee}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td>
                                <strong>{props.total}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    onRadioButtonClick(toCollect) {
        this.props.changeRadioButton(toCollect)
    }

    renderEmptyShoppingCart() {
        return <div>O carrinho está vazio</div>
    }

    onSubmit() {
        this.context.router.push(`/checkout/1`)
    }

    render() {
        const { props } = this

        let orderList

        if (props.orders.length) {
            orderList = this.renderOrderItems.bind(this)
        }
        else {
            orderList = this.renderEmptyShoppingCart
        }

        return (
            <div>
                <h5 className="uppercase">Carrinho</h5>
                <input 
                    type="submit"
                    disabled={!props.orders.length}
                    onClick={this.onSubmit.bind(this)}
                    value="Checkout" />
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
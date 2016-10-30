import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ShoppingCartItem from 'containers/ShoppingCartItem'
import { changeRadioButton, removeOrderItem, getOrdersForRest } from 'redux-store/modules/shoppingCart'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import { isAuthenticated, login } from'redux-store/modules/lock'
import styles from './styles.scss'

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
        changeRadioButton: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.func.isRequired,
        removeOrderItem: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        restName: PropTypes.string.isRequired
    }

    componentWillMount() {
        this.props.getOrdersForRest(this.props.restName)
    }

    renderEmptyShoppingCart() {
        return (
            <div className="text-center">
                <FormattedMessage id="CART_EMPTY" />
            </div>
        )
    }

    onSubmit() {
        this.context.router.push(`/checkout/1`)
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
                                name={order.name}
                                restName={props.restName}
                                removeOrderItem={props.removeOrderItem} />
                        })}
                    </tbody>
                </table>
                <table className="table">
                    <tbody styleName="table-inner">
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

    render() {
        const { props: { toCollect, orders, changeRadioButton } } = this
        const orderList = orders.length ? this.renderOrderItems.bind(this) : this.renderEmptyShoppingCart

        return (
            <div>
                <input
                    type="submit"
                    styleName="checkout-button"
                    disabled={!orders.length}
                    onClick={this.onSubmit.bind(this)}
                    value="Checkout" />
                <form styleName="checkboxes">
                    <label>
                        <input
                            type="radio"
                            id="collect"
                            name="collect"
                            checked={toCollect}
                            onChange={changeRadioButton.bind(this, true)} />
                        <FormattedMessage id="COLLECTION" />
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="delivery"
                            name="delivery"
                            checked={!toCollect}
                            onChange={changeRadioButton.bind(this, false)} />
                        <FormattedMessage id="DELIVERY" />
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
    deliveryFee: state.shoppingCart.deliveryFee,
    restName: state.restaurant.meta.name
})

const mapDispatchToProps= (dispatch, props) => ({
    changeRadioButton: (toCollect) => { changeRadioButton(dispatch, toCollect) },
    isAuthenticated: () => { isAuthenticated() },
    login: () => { login() },
    removeOrderItem: (restName, id) => { removeOrderItem(dispatch, restName, id) },
    getOrdersForRest: (restName) => { getOrdersForRest(dispatch, restName) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(ShoppingCart, styles))
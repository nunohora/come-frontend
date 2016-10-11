import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import StripeCheckout from 'react-stripe-checkout'
import CheckoutPaymentOption from 'components/CheckoutPaymentOption'
import styles from './styles.scss'

class CheckoutConfirmPayment extends React.Component {

    constructor(props) {
        super(props)

        this.state = { open: false }
    }

    onTitleClick() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { props } = this

        return (
            <div className="row normal-container">
                <div className="col-lg-7 col-lg-offset-2">
                    <div className="container">
                        <h4 className="uppercase mb16">Confirm your payment method</h4>
                    </div>
                    <div className="col-md-6">
                        <ul className="accordion accordion-1">
                            <CheckoutPaymentOption isFirst={true} />
                            <CheckoutPaymentOption />
                            <CheckoutPaymentOption />
                            <CheckoutPaymentOption />
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h6 styleName="your-order-title">Your order</h6>
                        <hr styleName="ruler" />
                        <table className="table" styleName="your-order-table">
                            <tbody styleName="no-border">
                                <tr>
                                    <td>Leite creme</td>
                                    <td styleName="price">4.99</td>
                                </tr>
                                <tr>
                                    <td>Leite creme</td>
                                    <td styleName="price">4.99</td>
                                </tr>
                                <tr>
                                    <td>Leite creme</td>
                                    <td styleName="price">4.99</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table" styleName="your-order-table">
                            <tbody styleName="border">
                                <tr>
                                    <th scope="row">Subtotal</th>
                                    <td styleName="price">400.34</td>
                                </tr>
                                <tr className="no-border">
                                    <th scope="row">Taxa de entrega</th>
                                    <td styleName="price">0.00</td>
                                </tr>
                                <tr styleName="border">
                                    <th scope="row">Total</th>
                                    <td className="text-right">
                                        <strong>4555.44</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="mb16 btn" type="submit">
                            Confirm order
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(CheckoutConfirmPayment, styles)
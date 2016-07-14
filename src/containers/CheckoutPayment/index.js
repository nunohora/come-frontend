import React, { PropTypes } from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class CheckoutPayment extends React.Component {

    onToken(token) {
        console.log('hereeee: ', token)
    }

    render() {
        return (
            <StripeCheckout
                token={this.onToken}
                bitcoin={true}
                stripeKey="" />
        )
    }
}
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

class CheckoutPayment extends React.Component {

    static propTypes = {
        profile: PropTypes.object.isRequired,
        total: PropTypes.number.isRequired,
        orderDetails: PropTypes.object.isRequired
    }

    onToken(token) {
        console.log('hereeee: ', token)
    }

    render() {
        const { props } = this

        return (
            <StripeCheckout
                token={this.onToken}
                email={props.profile.email}
                amount={props.total}
                locale="auto"
                currency="EUR"
                componentClass="div"
                description="pagamento da comida"
                panelLabel="Pagamento"
                allowRememberMe={true}
                bitcoin={true}
                stripeKey="pk_test_lEA5jDVB5dfFdwRGpTU5Rhii" />
        )
    }
}

const mapStateToProps = (state, props) => ({
    profile: state.lock.profile,
    total: state.shoppingCart.total,
    orderDetails: state.shoppingCart.orderDetails
})

export default connect(mapStateToProps)(CheckoutPayment)
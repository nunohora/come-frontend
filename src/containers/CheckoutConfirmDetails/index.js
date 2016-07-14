import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class CheckoutConfirmDetails extends React.Component {

    static propTypes = {
        baskedId: PropTypes.number.isRequired,
        user: PropTypes.obj.isRequired
    }

    render() {
        return (
            <div className="side-panel">
                Confirm Details
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutConfirmDetails)
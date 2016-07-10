import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addOrderItem } from 'redux-store/modules/shoppingCart'

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
            <button onClick={this.handleClick.bind(this)}>
                <i className="fa fa-shopping-cart"></i>
            </button>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    addOrderItem: (props) => { addOrderItem(dispatch, props) }
})

export default connect(null, mapDispatchToProps)(AddToCartButton)
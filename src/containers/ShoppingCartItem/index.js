import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeOrderItem } from 'redux-store/modules/shoppingCart'

class ShoppingCartItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        removeOrderItem: PropTypes.func.isRequired
    }

    handleClick(id) {
        this.props.removeOrderItem(id)
    }

    render() {
        const { props } = this

        return (
            <li>
                <span>{props.name}</span>
                <span>{props.price}</span>
                <button onClick={this.handleClick.bind(this, props.id)}>
                    <i className="fa fa-remove"></i>
                </button>
            </li>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    removeOrderItem: (id) => { removeOrderItem(dispatch, id) }
})

export default connect(null, mapDispatchToProps)(ShoppingCartItem)
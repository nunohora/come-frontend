import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addOrderItem } from 'redux-store/modules/shoppingCart'

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
            <a styleName="icon" className="btn btn-icon" onClick={this.handleClick.bind(this)}>
                <TiPlus />
            </a>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    addOrderItem: (props) => { addOrderItem(dispatch, props) }
})

export default connect(null, mapDispatchToProps)(AddToCartButton)
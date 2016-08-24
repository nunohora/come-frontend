import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { removeOrderItem } from 'redux-store/modules/shoppingCart'
import styles from './styles.scss'

let TiDelete = require('react-icons/lib/ti/delete')

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
            <tr>
                <th styleName="remove-row" scope="row">
                    <a onClick={this.handleClick.bind(this, props.id)}>
                        <TiDelete size={20} styleName="icon" />
                    </a>
                </th>
                <td>
                    <span>{props.name}</span>
                </td>
                <td>
                    <span>{props.price}</span>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    removeOrderItem: (id) => { removeOrderItem(dispatch, id) }
})

export default connect(null, mapDispatchToProps)(CSSModules(ShoppingCartItem, styles))
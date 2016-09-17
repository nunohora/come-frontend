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
        price: PropTypes.string.isRequired,
        removeOrderItem: PropTypes.func.isRequired
    }

    handleClick(id) {
        this.props.removeOrderItem(id)
    }

    render() {
        const { props } = this

        return (
            <tr styleName="item-row">
                <th styleName="remove-icon" scope="row">
                    <a onClick={this.handleClick.bind(this, props.id)}>
                        <TiDelete size={20} />
                    </a>
                </th>
                <td>
                    {props.name}
                </td>
                <td styleName="price">
                    {props.price}
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    removeOrderItem: (id) => { removeOrderItem(dispatch, id) }
})

export default connect(null, mapDispatchToProps)(CSSModules(ShoppingCartItem, styles))
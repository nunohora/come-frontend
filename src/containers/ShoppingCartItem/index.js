import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

let TiDelete = require('react-icons/lib/ti/delete')

class ShoppingCartItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        removeOrderItem: PropTypes.func.isRequired,
        restName: PropTypes.string.isRequired
    }

    render() {
        const { props } = this

        return (
            <tr styleName="item-row">
                <th styleName="remove-icon" scope="row">
                    <a onClick={props.removeOrderItem.bind(this, props.restName, props.id)}>
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

export default CSSModules(ShoppingCartItem, styles)
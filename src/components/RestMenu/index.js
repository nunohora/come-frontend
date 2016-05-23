import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import RestMenuItem from 'components/RestMenuItem'

export default class RestaurantMenu extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    renderProductList(list = []) {
        return list.map(item => {
            return (
                <RestMenuItem item={item} key={item.id} />
            )
        })
    }

    render() {
        return (
            <ul>
                {this.renderProductList(this.props.list)}
            </ul>
        )
    }
}
import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import RestMenuItem from 'components/RestMenuItem'
import styles from './styles.scss'

class RestaurantMenuGroup extends React.Component {

    static propTypes = {
        group: PropTypes.object.isRequired
    }

    renderProductList(list = []) {
        return list.map((item, index) => {
            return (
                <RestMenuItem item={item} key={index} />
            )
        })
    }

    render() {
        const { group: { items, name }} = this.props
        return (
            <div>
                <h5>{name}</h5>
                <ul>
                    {this.renderProductList(items)}
                </ul>
            </div>
        )
    }
}

export default CSSModules(RestaurantMenuGroup, styles)
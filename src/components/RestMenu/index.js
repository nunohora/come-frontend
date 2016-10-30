import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import RestMenuGroup from 'components/RestMenuGroup'
import styles from './styles.scss'

class RestaurantMenu extends React.Component {

    static propTypes = {
        menu: PropTypes.array,
        isFetching: PropTypes.bool,
        addOrderItem: PropTypes.func
    }

    render() {
        const { menu } = this.props

        return (
            <ul className="accordion">
                {Object.keys(menu).map((group, idx) => {
                    return <RestMenuGroup
                        group={menu[group]}
                        name={group}
                        key={idx}
                        addOrderItem={this.props.addOrderItem} />
                })}
            </ul>
        )
    }
}

export default CSSModules(RestaurantMenu, styles)
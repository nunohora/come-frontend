import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import RestMenuGroup from 'components/RestMenuGroup'
import styles from './styles.scss'

class RestaurantMenu extends React.Component {

    static propTypes = {
        list: PropTypes.array
    }

    renderProductGroups(list = []) {
        return list.map((group, index) => {
            return (
                <RestMenuGroup group={group} key={index} />
            )
        })
    }

    render() {
        return (
            <ul>
                {this.renderProductGroups(this.props.list)}
            </ul>
        )
    }
}

export default CSSModules(RestaurantMenu, styles)
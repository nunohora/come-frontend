import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import RestMenuGroup from 'components/RestMenuGroup'
import styles from './styles.scss'

class RestaurantMenu extends React.Component {

    static propTypes = {
        menu: PropTypes.object.isRequired
    }

    render() {
        const { menu } = this.props

        return (
            <ul className="accordion">
                {Object.keys(menu).map((group, idx) => {
                    return <RestMenuGroup group={menu[group]} name={group} key={idx} />
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    menu: state.restaurant.menu
})

export default connect(mapStateToProps, null)(CSSModules(RestaurantMenu, styles))
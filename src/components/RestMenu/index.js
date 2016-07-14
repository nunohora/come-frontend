import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import RestMenuGroup from 'components/RestMenuGroup'
import styles from './styles.scss'

class RestaurantMenu extends React.Component {

    static propTypes = {
        menu: PropTypes.array.isRequired
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
                {this.renderProductGroups(this.props.menu)}
            </ul>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    menu: state.restaurant.menu
})

export default connect(mapStateToProps, null)(CSSModules(RestaurantMenu, styles))
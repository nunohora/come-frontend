import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import RestMenuItem from 'components/RestMenuItem'
import styles from './styles.scss'

let FaPlus = require('react-icons/lib/fa/plus')
let FaMinus = require('react-icons/lib/fa/minus')

class RestaurantMenuGroup extends React.Component {

    static propTypes = {
        group: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            open: true
        }
    }

    renderProductList(list = []) {
        return list.map((item, index) => {
            return (
                <RestMenuItem item={item} key={index} />
            )
        })
    }

    onTitleClick() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { group, name } = this.props
        const { open } = this.state

        const icon = open ? <FaPlus size={18} /> : <FaMinus size={18} />

        return (
            <li className={classNames({ active: open })}>
                <div
                    className="title"
                    styleName="group-title"
                    onClick={this.onTitleClick.bind(this)}
                    >
                    <span>{icon}</span>
                    <span styleName="real-title">{name}</span>
                </div>
                <div className="content">
                    {this.renderProductList(group)}
                </div>
            </li>
        )
    }
}

export default CSSModules(RestaurantMenuGroup, styles)
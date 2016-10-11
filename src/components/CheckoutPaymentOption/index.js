import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default class CheckoutPaymentOption extends React.Component {

    static propTypes = {
        isFirst: PropTypes.bool
    }

    constructor(props) {
        super(props)

        this.state = { open: this.props.isFirst || false }
    }

    onTitleClick() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { open } = this.state

        return (
            <li className={classNames({ active: open })}>
                <div
                    className="title"
                    onClick={this.onTitleClick.bind(this)}>
                    <span>Payment Option</span>
                </div>
                <div className="content">
                    VISA
                </div>
            </li>
        )
    }
}
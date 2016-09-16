import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'

export default class MyAddresses extends React.Component {
    
    static propTypes = {}

    render() {
        return (
            <div className="uppercase">
                <FormattedMessage id="MY_ADDRESSES" tagName="h5" />
                <hr />
            </div>
        )
    }
}
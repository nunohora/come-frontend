import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class CheckoutConfirmDetails extends React.Component {

    static propTypes = {
        basketId: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="side-panel">
                Confirm Details
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.lock.profile,
    basketId: parseInt(props.params.basketId, 10)
})

export default connect(mapStateToProps, null)(CheckoutConfirmDetails)
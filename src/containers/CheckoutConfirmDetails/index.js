import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class CheckoutConfirmDetails extends React.Component {

    static propTypes = {
        basketId: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="row normal-container">
                <div className="col-md-4 col-md-offset-4">
                    <h4 className="uppercase mb16">Confirm details</h4>
                    <div className="input-with-label text-left">
                        <span>Mobile number</span>
                        <input type="text" />
                    </div>
                    <div className="input-with-label text-left">
                        <span>Address</span>
                        <input type="text" />
                    </div>
                    <div className="input-with-label text-left">
                        <span>City</span>
                        <input type="text" />
                    </div>
                    <div className="input-with-label text-left">
                        <span>Postcode</span>
                        <input type="text" />
                    </div>
                    <button className="mb16 btn" type="submit">
                        Confirm details
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.lock.profile,
    basketId: parseInt(props.params.basketId, 10)
})

export default connect(mapStateToProps, null)(CheckoutConfirmDetails)
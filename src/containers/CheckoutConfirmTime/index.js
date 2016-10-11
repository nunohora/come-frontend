import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

let TiChevronLeft = require('react-icons/lib/ti/chevron-left')

class CheckoutConfirmTime extends React.Component {

    static propTypes = {
        basketId: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="row normal-container">
                <div className="col-md-4 col-md-offset-4">
                    <h4 className="uppercase mb16">Confirm your delivery time</h4>
                    <div className="input-with-label text-left">
                        <span>Delivery time</span>
                        <div className="select-option">
                            <TiChevronLeft size={20} className="icon dropdown-arrow select" />
                            <select>
                                <FormattedMessage id="AS_SOON">
                                    {message => <option value="">{message}</option>}
                                </FormattedMessage>
                            </select>
                        </div>
                    </div>
                    <div className="input-with-label text-left">
                        <span>Leave a note for the restaurant</span>
                        <textarea rows="2"></textarea>
                    </div>
                    <button className="mb16 btn" type="submit">
                        Go to payment
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

export default connect(mapStateToProps, null)(CheckoutConfirmTime)
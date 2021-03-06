
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { getUserAccount } from 'redux-store/modules/user'

class User extends React.Component {

    static propTypes = {
        addresses: PropTypes.array.isRequired,
        payments: PropTypes.array.isRequired,
        orders: PropTypes.array.isRequired,
        getUserAccount: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.renderClasses.bind(this)
    }

    componentWillMount() {
        this.props.getUserAccount()
    }

    renderClasses(name) {
        const { pathname } = this.props.location
        const path = pathname.split('/')
        let string = path[path.length - 1]

        return classnames({
            'tab': true,
            'active': name === string
        })
    }

    render() {
        const { props: { params } } = this

        return (
            <div className="row normal-container">
                <div className="vertical-tabbed-content">
                    <div className="button-tabs col-md-3">
                        <div className={this.renderClasses('my-account')}>
                            <Link to="/user/my-account" role="tab"><FormattedMessage id="MY_ACCOUNT" /></Link>
                        </div>
                        <div className={this.renderClasses('my-orders')}>
                            <Link to="/user/my-orders" role="tab"><FormattedMessage id="MY_ORDERS" /></Link>
                        </div>
                        <div className={this.renderClasses('my-payments')}>
                            <Link to="/user/my-payments" role="tab"><FormattedMessage id="MY_PAYMENTS" /></Link>
                        </div>
                        <div className={this.renderClasses('my-addresses')}>
                            <Link to="/user/my-addresses" role="tab"><FormattedMessage id="MY_ADDRESSES" /></Link>
                        </div>
                    </div>
                    <div className="tab-content col-md-9">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    addresses: state.user.addresses,
    payments: state.user.payments,
    orders: state.user.orders
})

const mapDispatchToProps = (dispatch) => ({
    getUserAccount: () => { getUserAccount(dispatch) }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
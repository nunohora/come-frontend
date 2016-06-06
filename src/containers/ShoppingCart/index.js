import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { modules } from '@come/redux-store'

const { getOrderItems } = modules.order

class SearchResult extends React.Component {

    static propTypes = {
    }

    componentWillMount() {
        this.props.getOrderItems(this.props.postcode)
    }

    render() {
        const { props } = this

        return (
            <div className="side-panel">
                <button styleName="checkout-button"  className="btn btn-default-red-inverse" type="submit">
                    Checkout
                </button>
                <h6 className="title">O seu pedido</h6>
                <div className="categories">
                    <ul className="list-unstyled">
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurantList.isFetching,
    categories: state.restaurantList.categories,
    list: state.restaurantList.list,
    number: state.restaurantList.number,
    postcode: props.params.location,
    id: props.params.id
})

const mapDispatchToProps= (dispatch) => ({
    getRestListByLocation: (props) => { getRestListByLocation(dispatch, props) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
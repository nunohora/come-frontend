import { removeFirstFromList } from '../utils/generic'

const ADD_ORDER_ITEM_REQUEST = 'ADD_ORDER_ITEM_REQUEST'
const ADD_ORDER_ITEM_SUCCESS = 'ADD_ORDER_ITEM_SUCCESS'
const ADD_ORDER_ITEM_FAILURE = 'ADD_ORDER_ITEM_FAILURE'

const REMOVE_ORDER_ITEM_REQUEST = 'REMOVE_ORDER_ITEM_REQUEST'
const REMOVE_ORDER_ITEM_SUCCESS = 'REMOVE_ORDER_ITEM_SUCCESS'
const REMOVE_ORDER_ITEM_FAILURE = 'REMOVE_ORDER_ITEM_FAILURE'

const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST'
const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS'
const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE'

const TO_COLLECT_CHANGE_SUCCESS = 'TO_COLLECT_CHANGE_SUCCESS'

export function getOrdersForRest(dispatch, restName) {
    const allOrders = JSON.parse(localStorage.getItem('order_items')) || {}
    const orders = allOrders[restName] ? allOrders[restName] : []

    dispatch({
        type: ADD_ORDER_ITEM_SUCCESS,
        orders
    })
}

export function addOrderItem(dispatch, restName, item) {
    let allOrders = JSON.parse(localStorage.getItem('order_items')) || {}
    const orders = allOrders[restName] ? allOrders[restName] : []

    orders.push(item)

    allOrders[restName] = orders
    localStorage.setItem('order_items', JSON.stringify(allOrders))

    dispatch({
        type: ADD_ORDER_ITEM_SUCCESS,
        orders: allOrders[restName]
    })
}

export function removeOrderItem(dispatch, restName, itemId) {
    debugger

    let allOrders = JSON.parse(localStorage.getItem('order_items'))

    allOrders = removeFirstFromList(allOrders[restName], 'id', itemId)

    localStorage.setItem('order_items', JSON.stringify(allOrders))

    dispatch({
        type: REMOVE_ORDER_ITEM_SUCCESS,
        orders: allOrders[restName]
    })
}

export function changeRadioButton(toCollect) {
    return dispatch => {
        dispatch({
            type: TO_COLLECT_CHANGE_SUCCESS,
            toCollect
        })
    }
}

function getSubtotal(orders) {
    let subtotal = 0

    orders.forEach(order => {
        const price = parseFloat(order.price)

        subtotal = subtotal + price
    })

    return subtotal.toFixed(2)
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [ADD_ORDER_ITEM_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            orders: data.orders,
            subtotal: getSubtotal(data.orders),
            total: getSubtotal(data.orders)
        })
    },
    [TO_COLLECT_CHANGE_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            toCollect: data.toCollect
        })
    },
    [REMOVE_ORDER_ITEM_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            orders: data.orders,
            subtotal: getSubtotal(data.orders),
            total: getSubtotal(data.orders)
        })
    }
}

const initialState = {
    orders: [],
    subtotal: "0.00",
    deliveryFee: "0.00",
    total: "0.00",
    toCollect: false,
    orderDetails: {}
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
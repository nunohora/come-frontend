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

export function addOrderItem(dispatch, item) {
    const orderItems = localStorage.getItem('order_items')

    let orders = orderItems ? JSON.parse(orderItems) : []

    orders.push(item)

    localStorage.setItem('order_items', JSON.stringify(orders))

    dispatch({
        type: ADD_ORDER_ITEM_SUCCESS,
        orders
    })
}

export function removeOrderItem(dispatch, itemId) {
    let ordersArray = JSON.parse(localStorage.getItem('order_items'))

    const orders = removeFirstFromList(ordersArray, 'id', itemId)

    localStorage.setItem('order_items', JSON.stringify(orders))

    dispatch({
        type: REMOVE_ORDER_ITEM_SUCCESS,
        orders
    })
}

export function changeRadioButton(dispatch, toCollect) {
    dispatch({
        type: TO_COLLECT_CHANGE_SUCCESS,
        toCollect
    })
}

function getSubtotal(orders) {
    let subtotal = 0

    orders.forEach(order => { subtotal = subtotal + order.price })

    return subtotal
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

const orders = localStorage.getItem('order_items') ? JSON.parse(localStorage.getItem('order_items')) : []
const subtotal = getSubtotal(orders)

const initialState = {
    orders: orders,
    subtotal: subtotal,
    deliveryFee: 0,
    total: subtotal,
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
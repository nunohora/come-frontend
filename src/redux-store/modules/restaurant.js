/* global Promise */

import { CALL_API } from '../middleware/api'
import slug from 'slug'

export const GET_RESTAURANT_REQUEST = 'GET_RESTAURANT_REQUEST'
export const GET_RESTAURANT_SUCCESS = 'GET_RESTAURANT_SUCCESS'
export const GET_RESTAURANT_FAILURE = 'GET_RESTAURANT_FAILURE'

export const GET_DETAILS_REQUEST = 'GET_DETAILS_REQUEST'
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS'
export const GET_DETAILS_FAILURE = 'GET_DETAILS_FAILURE'

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'


// ------------------------------------
// Actions
// ------------------------------------
export function getRestaurant(dispatch, id) {
    dispatch(getRestaurantRequest())

    dispatch({
        [CALL_API]: {
            endpoint: `places`,
            types: [GET_RESTAURANT_REQUEST, GET_RESTAURANT_SUCCESS, GET_RESTAURANT_FAILURE]
        }
    })
}

function getRestaurantProducts(id) {
    return {
        [CALL_API]: {
            endpoint: `places/${id}/products`,
            types: [GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE]
        }
    }
}

function getRestaurantRequest() {
    return {
        type: GET_RESTAURANT_REQUEST,
        isFetching: true
    }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_RESTAURANT_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: false,
            meta: data.response.meta,
            menu: data.response.menu,
            menuCategories: data.response.menu.map((item) => item.name)
        })
    },
    [GET_RESTAURANT_FAILURE]: state => {
        return Object.assign({}, state, {
            isFetching: false
        })
    }
}

const initialState = {
    meta: {
        name: '',
        rating: 0,
        categories: [],
        openingTimes: '',
        thumbnail: ''
    },
    menu: [],
    menuCategories: [],
    isFetching: false
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
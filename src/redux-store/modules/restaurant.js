/* global Promise */

import { CALL_API } from '../middleware/api'
import slug from 'slug'

export const GET_MENU_REQUEST = 'GET_MENU_REQUEST'
export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS'
export const GET_MENU_FAILURE = 'GET_MENU_FAILURE'

export const GET_REVIEWS_REQUEST = 'GET_REVIEWS_REQUEST'
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS'
export const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE'

export const GET_INFO_REQUEST = 'GET_INFO_REQUEST'
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS'
export const GET_INFO_FAILURE = 'GET_INFO_FAILURE'


// ------------------------------------
// Actions
// ------------------------------------
export function getRestaurantMenu(dispatch, slug) {
    dispatch({ type: GET_MENU_REQUEST })

    dispatch({
        [CALL_API]: {
            endpoint: `places/${slug}`,
            types: [GET_MENU_REQUEST, GET_MENU_SUCCESS, GET_MENU_FAILURE]
        }
    })
}

export function getRestaurantReviews(dispatch, slug) {
    dispatch({
        [CALL_API]: {
            endpoint: `places/${slug}/reviews`,
            types: [GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE]
        }
    })
}

export function getRestaurantInfo(dispatch, slug) {
    dispatch({
        [CALL_API]: {
            endpoint: `places/${slug}}/info`,
            types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAILURE]
        }
    })
}

function setMenuByGroup(list) {
    let groups = {};

    list.forEach(menuItem => {
        const menuGroup = menuItem.menu_group.name

        if (!groups[menuGroup]) {
            groups[menuGroup] = [menuItem]
        }
        else {
            groups[menuGroup].push(menuItem)
        }
    })

    return groups
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_MENU_REQUEST]: state => {
        return Object.assign({}, state, {
            isFetching: true
        })
    },
    [GET_MENU_SUCCESS]: (state, data) => {
        const menu = setMenuByGroup(data.response.menu)

        return Object.assign({}, state, {
            isFetching: false,
            meta: data.response.meta,
            menu: menu,
            menuCategories: Object.keys(menu)
        })
    },
    [GET_MENU_FAILURE]: state => {
        return Object.assign({}, state, {
            isFetching: false
        })
    },
    [GET_REVIEWS_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: false,
            reviews: data.response
        })
    },
    [GET_REVIEWS_REQUEST]: state => {
        return Object.assign({}, state, {
            isFetching: true
        })
    },
    [GET_INFO_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: false,
            info: data.info
        })
    },
    [GET_INFO_REQUEST]: state => {
        return Object.assign({}, state, {
            isFetching: true
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
    menu: {},
    menuCategories: [],
    reviews: [],
    isFetching: false
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
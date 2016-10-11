/* global Promise */

import { CALL_API } from 'redux-api-middleware'

export const GET_ACCOUNT_REQUEST = 'GET_ACCOUNT_REQUEST'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export function getUserAccount(dispatch) {
    dispatch({ type: GET_ACCOUNT_REQUEST })

    dispatch({
        [CALL_API]: {
            endpoint: `http://api.come.dev:8000/user/account/`,
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('id_token') ? localStorage.getItem('id_token') : ''
            },
            types: [GET_ACCOUNT_REQUEST, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE]
        }
    })
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_ACCOUNT_REQUEST]: state => {
        return Object.assign({}, state, {
            isFetching: true
        })
    },
    [GET_ACCOUNT_SUCCESS]: (state, data) => {
        debugger

        return state
    },
    [GET_ACCOUNT_FAILURE]: state => {
        return Object.assign({}, state, {
            isFetching: false
        })
    }
}

const initialState = {
    addresses: [],
    payments: [],
    orders: []
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
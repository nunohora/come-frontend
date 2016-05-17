/* global Promise */

import api from 'utils/api'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export function loginUser(dispatch, params) {
    Promise(api.loginUser(params))
        .then(response => {
            dispatch({
                type: USER_LOGIN,
                response: response
            })
    })
}

export function logoutUser() {
    dispatch({
        type: USER_LOGOUT
    })
}

//Reducer
const user = localStorage.getItem('user')
const initialState = user ? JSON.parse(user) : {}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case USER_LOGIN:
            console.log(state)
            return {
                ...state
            }
        case USER_LOGOUT:
            return {
                ...state
            }
        default:
            return state
    }
}
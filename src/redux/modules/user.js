/* global Promise */

import api from 'utils/api'
import update from 'react-addons-update'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

export function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}

export function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

export function loginUser(dispatch, creds) {
    let config = {
        method: 'POST',
        headers: {'Content-type': 'application/x-www-form-urlencoded'},
        body: `username=${creds.username}&password=${creds.password}`
    }

    return dispatch => {
        dispatch(requestLogin(creds))

        return fetch('http://localhost:3001/sessions/create', config)
            .then(response => {
                response.json().then(user => ({ user, response }))
            })
            .then(({ user, response }) => {
                if (!response.ok) {
                    dispatch(loginError(user.message))

                    return Promise.reject(user)
                }
                else {
                    localStorage.setItem('id_token', user.id_token)

                    dispatch(receiveLogin(user))
                }
            })
            .catch(err => { console.log('Error: ', err)})
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout)
        localStorage.removeItem('id_token')
        dispatch(receiveLogout())
    }
}

const initialState = { isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false }

//Reducer
export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return update(state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            })
        case LOGIN_SUCCESS:
            return update(state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            })
        case LOGIN_FAILURE:
            return update(state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case LOGOUT_SUCCESS:
            return update(state, {
                isFetching: true,
                isAuthenticated: false
            })
        default:
            return state
    }
}
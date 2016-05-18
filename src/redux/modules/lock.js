import Auth0Lock from 'auth0-lock'
import update from 'react-addons-update'

export const SHOW_LOCK = 'SHOW_LOCK'
export const LOCK_SUCCESS = 'LOCK_SUCCESS'
export const LOCK_ERROR = 'LOCK_ERROR'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const lock = new Auth0Lock('***REMOVED***', '***REMOVED***')

function lockSuccess(profile, token) {
    return {
        type: LOCK_SUCCESS,
        profile,
        token
    }
}

function lockError(err) {
    return {
        type: LOCK_ERROR
    }
}

export function showLock() {
    lock.show()

    return {
        type: SHOW_LOCK
    }
}

export function login(dispatch) {

    return () => {
        lock.show((err, profile, token) => {
            if (err) {
                dispatch(lockError(err))
                return
            }
            localStorage.setItem('profile', JSON.stringify(profile))
            localStorage.setItem('id_token', token)
            dispatch(lockSuccess(profile, token))
        })
    }
}

export function logout(dispatch) {
    return dispatch => {
        dispatch(requestLogout)
        localStorage.removeItem('id_token')
        dispatch(receiveLogout())
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

const initialState = { isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false }

//Reducer
export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case LOCK_SUCCESS:
            return update(state, {
                isFetching: false,
                isAuthenticated: true,
                profile: action.profile,
                errorMessage: ''
            })
        case LOCK_ERROR:
            return update(state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case LOGOUT_REQUEST:
            return update(state, {
                isFetching: false,
                isAuthenticated: true
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
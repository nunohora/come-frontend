import Auth0Lock from 'auth0-lock'

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
        type: LOCK_ERROR,
        errorMessage: err.message
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

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LOCK_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            profile: data.profile,
            errorMessage: ''
        })
    },
    [LOCK_ERROR]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false,
            errorMessage: data.message
        })
    },
    [LOGOUT_REQUEST]: (state) => {
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true
        })
    },
    [LOGOUT_SUCCESS]: (state) => {
        return Object.assign({}, state, {
            isFetching: true,
            isAuthenticated: false
        })
    }
}

const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    profile: {}
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function lockReducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
import AuthService from 'redux-store/utils/authService'

const LOCK_SUCCESS = 'LOCK_SUCCESS'
const LOCK_ERROR = 'LOCK_ERROR'
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const clientId = '***REMOVED***'
const domain = '***REMOVED***'

const options = {
    autoclose: true,
    theme: {
        logo: 'https://s3-eu-west-1.amazonaws.com/come.pt/img/android-icon-192x192-transparent.png',
        primaryColor: 'green'
    },
    socialButtonStyle: 'big'
}

const lock = new AuthService(clientId, domain, options)

function lockError(err) {
    return {
        type: LOCK_ERROR,
        errorMessage: err.message
    }
}

export function login(dispatch) {
    lock.login(dispatch)
}

export function signup(dispatch) {
    return () => {
        lock.show((err) => {
            if (err) {
                dispatch(lockError(err))
                return
            }
            lock.hide()
        })
    }
}

export function logout(dispatch) {
    dispatch(requestLogout)
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    dispatch(receiveLogout())
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
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

console.log(localStorage.getItem('id_token'));
const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    profile: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : {}
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
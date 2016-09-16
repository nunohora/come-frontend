import Auth0Lock from 'auth0-lock'

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

let lock

function lockError(err) {
    return {
        type: LOCK_ERROR,
        errorMessage: err.message
    }
}

export function initAuth(dispatch) {
    lock = new Auth0Lock(clientId, domain, options)
    lock.on('authenticated', onAuthenticated.bind(this, dispatch))
}

export function login(dispatch) {
    lock.show()
}

export function logout(dispatch) {
    dispatch(requestLogout)
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    dispatch(receiveLogout())
}

function onAuthenticated(dispatch, authResult) {
    lock.getProfile(authResult.idToken, (err, profile) => {
        localStorage.setItem('id_token', JSON.stringify(authResult.idToken))
        localStorage.setItem('profile', JSON.stringify(profile))

        dispatch({ type: LOCK_SUCCESS })
    })
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
    [LOCK_SUCCESS]: (state) => {
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: true,
            profile: JSON.parse(localStorage.getItem('profile')),
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
    profile: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : {}
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
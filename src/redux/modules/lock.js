import update from 'react-addons-update'

export const SHOW_LOCK = 'SHOW_LOCK'
export const LOCK_SUCCESS = 'LOCK_SUCCESS'
export const LOCK_ERROR = 'LOCK_ERROR'

// ------------------------------------
// Actions
// ------------------------------------
function showLock() {
    return {
        type: SHOW_LOCK
    }
}

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

export function login() {
    const lock = new Auth0Lock('***REMOVED***', '***REMOVED***');

    return dispatch => {
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


const initialState = {
    postcode: '',
    categories: [],
    list: [],
    number: 0,
    isFetching: false
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}


// ------------------------------------
// Reducer
// ------------------------------------
export default function restaurantListReducer(state = initialState, action = {}) {
    const { data } = action
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, data) : state
}
const GET_BREADCRUMBS = 'GET_BREADCRUMBS'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_BREADCRUMBS]: (state) => {
        return Object.assign({}, state, {
            isFetching: true
        })
    }
}

const initialState = [{ path: '/', name: 'Home' }]

// ------------------------------------
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
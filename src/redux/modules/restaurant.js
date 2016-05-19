import { CALL_API } from 'redux/middleware/api'

export const GET_DETAILS_REQUEST = 'GET_DETAILS_REQUEST'
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS'
export const GET_DETAILS_FAILURE = 'GET_DETAILS_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export function getRestaurantDetails(id) {
    Promise.all([api.getRestaurantById(id), api.getRestaurantProducts(id)])
        .then((place, products) => {
            dispatch({
                type: GET_REST_BY_ID,
                response: {
                    place: place.place,
                    products: products.products,
                    meta: place.meta
                }
            });
        });
}

export const actions = {
    getRestById
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_DETAILS_REQUEST]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: true
        })
    },
    [GET_DETAILS_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: false
        })
    },
    [GET_DETAILS_FAILURE]: (state) => {
        return Object.assign({}, state, {
            isFetching: false
        })
    }
}


const initialState = {
    isFetching: false
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function restaurantListReducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
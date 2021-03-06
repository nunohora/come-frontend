import { CALL_API } from 'redux-api-middleware'
import { findWhere } from '../utils/generic'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

const endpoint = 'http://come.dev:8000'

// ------------------------------------
// Actions
// ------------------------------------
export function getRestListByLocation(dispatch, postcode) {
    dispatch(searchRequest(postcode))

    dispatch({
        [CALL_API]: {
            endpoint: `${endpoint}/search/${postcode}/`,
            method: 'GET',
            types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE]
        }
    })
}

function searchRequest(postcode) {
    return {
        type: SEARCH_REQUEST,
        isFetching: true,
        postcode: postcode
    }
}

function setCategories(list, totalResults) {
    const cats = [{
        id: 0,
        name: 'Total',
        number: totalResults
    }];

    list.map(restaurant => {
        restaurant.food_categories.map(cat => {

            const { name } = cat
            const exists = findWhere(cats, { name: name })

            if (exists) {
                exists.number = exists.number + 1
            }
            else {
                cats.push({
                    id: cats.length,
                    name: cat.name,
                    number: 1
                })
            }
        })
    })

    return cats
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [SEARCH_REQUEST]: (state, data) => {
        return Object.assign({}, state, {
            isFetching: true,
            postcode: data.postcode
        })
    },
    [SEARCH_SUCCESS]: (state, data) => {
        return Object.assign({}, state, {
            postcode: data.postcode,
            categories: setCategories(data.payload, data.payload.length),
            list: data.payload,
            number: data.payload.length,
            isFetching: false
        })
    },
    [SEARCH_FAILURE]: (state) => {
        return Object.assign({}, state, {
            isFetching: false
        })
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
// Reducer
// ------------------------------------
export default function reducer(state = initialState, action = {}) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
import { getRestaurantsByLocation } from '../../utils'
import _ from 'underscore'
import update from 'react-addons-update'

const SEARCH_POSTCODE = 'SEARCH_POSTCODE'
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_RESTAURANTS = 'GET_RESTAURANTS'
const GET_RESULT_NUMBER = 'GET_RESULT_NUMBER'

// ------------------------------------
// Actions
// ------------------------------------
export function getRestListByLocation(dispatch, postcode) {
    getRestaurantsByLocation(postcode)
        .then(response => {
            dispatch({
                type: SEARCH_POSTCODE,
                data: {
                    postcode,
                    ...response.data
                }
            })
        });
}

function setCategories(list, totalResults) {
    const cats = [{
        id: 0,
        name: 'Total',
        number: totalResults
    }];

    list.map(restaurant => {
        restaurant.categories.map(cat => {
            const { id } = cat
            const exists = _.findWhere(cats, { id: id })

            if (exists) {
                exists.number = exists.resultNumber
            }
            else {
                cats.push({
                    id: id,
                    name: cat.name,
                    number: 1
                })
            }
        })
    })

    return cats
}

const initialState = {
    postcode: '',
    categories: [],
    list: [],
    number: 0,
    loaded: false
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [SEARCH_POSTCODE]: (state, data) => {
        return update(state, {
            postcode: { $set: data.postcode },
            categories: { $set: setCategories(data.search, data.meta.total_results) },
            list: { $set: data.search},
            number: { $set: data.meta.total_results }
        })
    }
}


// ------------------------------------
// Reducer
// ------------------------------------
export default function restaurantListReducer(state = initialState, action = {}) {
    const { data } = action
    const handler = ACTION_HANDLERS[action.type]

    if (handler) {
        console.log(handler(state, data))
        return handler(state, data)
    }
    else {
        return state
    }
    // return handler ? handler(state, data) : state
}
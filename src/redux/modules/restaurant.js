/* global Promise, dispatch */

import utils from '../../utils'

export const GET_REST_BY_ID = 'GET_REST_BY_ID'

export function getRestById(id) {
    Promise.all([utils.getRestaurantById(id), utils.getRestaurantProducts(id)])
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

//Reducer
const initialState = {
    place: {},
    products: [],
    meta: {}
}

export default function restaurantReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_REST_BY_ID:
            return {
                ...state
            }
        default:
            return state
    }
}
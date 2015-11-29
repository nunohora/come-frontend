const AppDispatcher = require('../dispatcher/AppDispatcher'), Constants = require('../constants/Constants'), utils = require('../utils'), $ = require('jquery');
let lastFetched = '';
const dispatch = function (actionType, params, response) {
    AppDispatcher.dispatch({
        actionType: actionType,
        params: params,
        response: response
    });
};
const RestaurantListActions = {
    getRestListByLocation(params) {
        if (lastFetched !== params) {
            $.when(utils.getRestaurantsByLocation(params)).done(response => {
                dispatch(Constants.GET_REST_LIST, params, response);
            });
            lastFetched = params;
        } else {
            dispatch(Constants.GET_REST_LIST, params);
        }
    }
};
module.exports = RestaurantListActions;
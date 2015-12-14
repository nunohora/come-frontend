import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import utils from '../utils';
import $ from 'jquery';

let lastFetched = '';

const dispatch = (actionType, params, response) => {
    AppDispatcher.dispatch({
        actionType: actionType,
        params: params,
        response: response
    });
};

module.exports = {
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
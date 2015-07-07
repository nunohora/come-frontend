var AppDispatcher = require('dispatcher/AppDispatcher'),
    Constants     = require('constants/Constants'),
	utils         = require('utils'),
	$             = require('jquery');

var lastFetched = '';

var dispatch = function (actionType, params, response) {
	AppDispatcher.dispatch({
		actionType: actionType,
		params: params,
		response: response
	});
};

var RestaurantListActions = {
	getRestListByLocation: function (params) {

		if (lastFetched !== params) {
			$.when(utils.getRestaurantsByLocation(params)).done(function (response) {
				dispatch(Constants.GET_REST_LIST, params, response);
			});

			lastFetched = params;
		}
		else {
			dispatch(Constants.GET_REST_LIST, params);
		}
	}
};

module.exports = RestaurantListActions;
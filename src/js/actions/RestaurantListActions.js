var AppDispatcher = require('dispatcher/AppDispatcher'),
    Constants     = require('constants/Constants'),
	utils         = require('utils'),
	$             = require('jquery');

var RestaurantListActions = {
	getRestListByLocation: function (params) {
		$.when(utils.getRestaurantsByLocation(params)).done(function (response) {
			AppDispatcher.dispatch({
				actionType: Constants.GET_REST_LIST,
				params: params,
				response: response
			});
  		});
	}
};

module.exports = RestaurantListActions;
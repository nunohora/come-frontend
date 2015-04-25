var AppDispatcher = require('dispatcher/AppDispatcher'),
    Constants     = require('constants/Constants'),
	utils         = require('utils'),
	$             = require('jquery');

var RestaurantListActions = {
  getRestList: function (params) {
  	$.when(utils.getRestaurants(params)).done(function (response) {
	    AppDispatcher.dispatch({
	      actionType: Constants.GET_REST_LIST,
	      params: params,
	      response: response
	    });
  	});
  }
};

module.exports = RestaurantListActions;
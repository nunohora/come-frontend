var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants     = require('../constants/Constants'),
    utils         = require('../utils'),
    $             = require('jquery');

var RestaurantActions = {
    getRestById: function (id) {
        $.when(utils.getRestaurantById(id)).done(function (response) {
            AppDispatcher.dispatch({
                actionType: Constants.GET_REST_BY_ID,
                response: response
            });
        });
    }
};

module.exports = RestaurantActions;
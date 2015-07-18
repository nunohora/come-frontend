var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants     = require('../constants/Constants'),
    utils         = require('../utils'),
    $             = require('jquery');

var UserActions = {
    loginUser: function (params) {
        $.when(utils.loginUser(params)).done(function (response) {
            AppDispatcher.dispatch({
                actionType: Constants.USER_LOGIN,
                response: response
            });
        });
    },

    logoutUser: function () {
        AppDispatcher.dispatch({
            actionType: Constants.USER_LOGOUT
        });
    }
};

module.exports = UserActions;
var AppDispatcher = require('dispatcher/AppDispatcher'),
    Constants     = require('constants/Constants'),
    utils         = require('utils'),
    $             = require('jquery');

var UserActions = {
  loginUser: function (params) {
    $.when(utils.loginUser(params)).done(function (response) {
        AppDispatcher.dispatch({
          actionType: Constants.LOGIN_USER,
          params: params,
          response: response
        });
    });
  },

  logoutUser: function () {
    AppDispatcher.dispatch({
      actionType: Constants.LOGOUT_USER,
      params: params,
      response: response
    });
  }
};

module.exports = UserActions;
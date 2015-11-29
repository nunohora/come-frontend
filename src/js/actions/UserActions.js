const AppDispatcher = require('../dispatcher/AppDispatcher');
const Constants = require('../constants/Constants');
const utils = require('../utils');
const $ = require('jquery');

module.exports = {
    loginUser(params) {
        $.when(utils.loginUser(params)).done(response => {
            AppDispatcher.dispatch({
                actionType: Constants.USER_LOGIN,
                response: response
            });
        });
    },
    logoutUser() {
        AppDispatcher.dispatch({ actionType: Constants.USER_LOGOUT });
    }
};
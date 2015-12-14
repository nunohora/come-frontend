import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import utils from '../utils';
import $ from 'jquery';

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
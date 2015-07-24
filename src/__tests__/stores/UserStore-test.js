"use strict";

jest.autoMockOn();

jest.dontMock('../../js/stores/UserStore');
jest.dontMock('../../js/constants/Constants');

describe('UserStore', function() {
    var CONSTANTS = require('../../js/constants/Constants'),
        UserStore, AppDispatcher, callback;

    // mock actions inside dispatch payloads
    var actionUserLogin = {
        actionType: CONSTANTS.USER_LOGIN,
        response: 'Hello'
    };

    var actionUserLogout = {
        actionType: CONSTANTS.USER_LOGOUT
    };

    beforeEach(function() {
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        AppDispatcher.register = jest.genMockFunction();
        UserStore = require('../../js/stores/UserStore');
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', function () {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });

    it('checks that localStorage has user object after login', function () {
        spyOn(localStorage, 'setItem');
        callback(actionUserLogin);

        expect(localStorage.setItem).toHaveBeenCalledWith('user', '"Hello"');
    });

    it('checks that localStorage has removed the user object after logout', function () {
        spyOn(localStorage, 'removeItem');
        callback(actionUserLogout);

        expect(localStorage.removeItem).toHaveBeenCalledWith('user');
    });
});
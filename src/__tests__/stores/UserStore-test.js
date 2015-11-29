'use strict';
jest.autoMockOn();
jest.dontMock('../../js/stores/UserStore');
jest.dontMock('../../js/constants/Constants');

describe('UserStore', () => {
    let CONSTANTS = require('../../js/constants/Constants'), UserStore, AppDispatcher, callback;

    // mock actions inside dispatch payloads
    const actionUserLogin = {
        actionType: CONSTANTS.USER_LOGIN,
        response: 'Hello'
    };

    const actionUserLogout = { actionType: CONSTANTS.USER_LOGOUT };

    beforeEach(() => {
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        AppDispatcher.register = jest.genMockFunction();
        UserStore = require('../../js/stores/UserStore');
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', () => {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });

    it('checks that localStorage has user object after login', () => {
        spyOn(localStorage, 'setItem');
        callback(actionUserLogin);
        expect(localStorage.setItem).toHaveBeenCalledWith('user', '"Hello"');
    });

    it('checks that localStorage has removed the user object after logout', () => {
        spyOn(localStorage, 'removeItem');
        callback(actionUserLogout);
        expect(localStorage.removeItem).toHaveBeenCalledWith('user');
    });
});
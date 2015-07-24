"use strict";

jest.autoMockOn();

jest.dontMock('../../js/stores/UserStore');
jest.dontMock('../../js/constants/Constants');

describe('UserStore', function() {
    var CONSTANTS = require('../../js/constants/Constants'),
        UserStore, AppDispatcher, callback;

    // mock actions inside dispatch payloads
    var actionUserLogin= {
        source: 'VIEW_ACTION',
        action: {
            actionType: CONSTANTS.USER_LOGIN,
            text: 'foo'
        }
    };

    var actionUserLogout = {
        source: 'VIEW_ACTION',
        action: {
            actionType: CONSTANTS.USER_LOGOUT,
            id: 'replace me in test'
        }
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

    xit('checks that localStorage has user object after login', function () {

    });
});
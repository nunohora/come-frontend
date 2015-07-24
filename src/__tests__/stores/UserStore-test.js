"use strict";

jest.autoMockOn();

jest.dontMock('../../js/stores/UserStore');
jest.dontMock('../../js/constants/Constants');

describe('UserStore', function() {
    var UserStore, AppDispatcher, CONSTANTS, callback;

    beforeEach(function() {
        CONSTANTS = require('../../js/constants/Constants');
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        AppDispatcher.register = jest.genMockFunction();

        UserStore = require('../../js/stores/UserStore');
    });

    it('registers a callback with the dispatcher', function () {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });
});
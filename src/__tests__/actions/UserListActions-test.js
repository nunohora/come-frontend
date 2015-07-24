"use strict";

jest.dontMock('../../js/actions/UserActions');

describe('UserActions', function() {
    var UserActions,
        AppDispatcher,
        CONSTANTS,
        utils,
        $;

    beforeEach(function() {
        UserActions = require('../../js/actions/UserActions');
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        CONSTANTS = require('../../js/constants/Constants');
        utils = require('../../js/utils');
        $ = require('jquery');

        spyOn(AppDispatcher, 'dispatch');
    });

    it('tests dispatcher is called with right params when login', function () {
        var params = "EXPECTED_PARAMS",
            constant = CONSTANTS.USER_LOGIN;

        spyOn(utils, 'loginUser').andCallFake(function () {
            var dfd = new $.Deferred();

            dfd.resolve('MOCK RESPONSE');

            return dfd.promise();
        });

        UserActions.loginUser(params);

        expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
            actionType: constant,
            response: 'MOCK RESPONSE'
        });
    });

    it('tests dispatcher is called with right params when logout', function () {
        var params = "EXPECTED_PARAMS",
            constant = CONSTANTS.USER_LOGOUT;

        UserActions.logoutUser(params);

        expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
            actionType: constant
        });
    });
});
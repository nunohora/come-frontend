"use strict";

jest.dontMock('../../js/actions/RestaurantListActions');
jest.dontMock('../../js/constants/Constants');
jest.dontMock('jquery');

describe('RestaurantListActions', function() {
    var RestaurantListActions,
        AppDispatcher,
        CONSTANTS,
        utils,
        $;

    beforeEach(function() {
        RestaurantListActions = require('../../js/actions/RestaurantListActions');
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        CONSTANTS = require('../../js/constants/Constants');
        utils = require('../../js/utils');
        $ = require('jquery');
    });

    it('tests dispatcher is called with right params', function () {
        var params = "EXPECTED_PARAMS";

        spyOn(AppDispatcher, 'dispatch');

        spyOn(utils, 'getRestaurantsByLocation').andReturn(function () {
            var dfd = new $.Deferred();

            dfd.resolve('RESOLVED');

            return dfd.promise;
        });

        RestaurantListActions.getRestListByLocation(params);

        expect(AppDispatcher.dispatch).toHaveBeenCalled();

        RestaurantListActions.getRestListByLocation(params);

        expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
            actionType: CONSTANTS.GET_REST_LIST,
            params: params
        });
    })
});
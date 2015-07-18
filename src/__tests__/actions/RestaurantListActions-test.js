"use strict";

jest.dontMock('../../js/actions/RestaurantListActions');
jest.dontMock('jquery');

describe('RestaurantListActions', function() {
    var RestaurantListActions,
        AppDispatcher,
        Constants,
        utils,
        $;

    beforeEach(function() {
        RestaurantListActions = require('../../js/actions/RestaurantListActions');
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        Constants = require('../../js/constants/Constants');
        utils = require('../../js/utils'),
        $ = require('jquery');
    });

    xit('tests that dispatcher is called', function () {
        var params = "EXPECTED_PARAMS";

        spyOn(AppDispatcher, 'dispatch');
        spyOn($, 'when').and.callFake(function () {
            var deferred = new $.Deferred();

            deferred.resolve('RESOLVED');

            return deferred.promise;
        })

        RestaurantListActions.getRestListByLocation(params);

        expect(AppDispatcher.dispatch).toHaveBeenCalled();
    })
});
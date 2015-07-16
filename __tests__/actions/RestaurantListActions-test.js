"use strict";

jest.dontMock('../../src/js/actions/RestaurantListActions');

describe('RestaurantListActions', function() {
    var RestaurantListActions,
        AppDispatcher,
        Constants,
        utils,
        $;

    beforeEach(function() {
        RestaurantListActions = require('../../src/js/actions/RestaurantListActions');
        AppDispatcher = require('../../src/js/dispatcher/AppDispatcher');
        Constants = require('../../src/js/constants/Constants');
    });

    it('tests nothing', function () {
        expect(1).toBe(1);
    })
});
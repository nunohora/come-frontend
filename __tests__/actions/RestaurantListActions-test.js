"use strict";

jest.dontMock('../../js/actions/RestaurantListActions');

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
    });

    it('tests nothing', function () {
        expect(1).toBe(1);
    })
});
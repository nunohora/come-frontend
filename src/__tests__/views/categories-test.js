"use strict";

jest.dontMock('../../js/views/restaurant-list/categories.jsx');
jest.dontMock('../../js/stores/RestaurantListStore');
jest.dontMock('../../js/constants/Constants');
jest.dontMock('../mockData/restaurantList');

describe('Login Form', function() {
    var CategoriesView, React, TestUtils, CONSTANTS, RestaurantListStore,
        mockData, AppDispatcher, actionGetRestListStore, callback;

    beforeEach(function() {
        mockData = require('../mockData/restaurantList');
        CONSTANTS = require('../../js/constants/Constants');

        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        AppDispatcher.register = jest.genMockFunction();
        RestaurantListStore = require('../../js/stores/RestaurantListStore');
        callback = AppDispatcher.register.mock.calls[0][0];

        React = require('react/addons');
        TestUtils = React.addons.TestUtils;

        CategoriesView = require('../../js/views/restaurant-list/categories.jsx');

        // mock actions inside dispatch payloads
        actionGetRestListStore = {
            actionType: CONSTANTS.GET_REST_LIST,
            params: '4050-234',
            response: mockData
        };
    });

    it('tests that error message shows if invalid email or empty fields are used', function () {
        callback(actionGetRestListStore);

        var cats = RestaurantListStore.getCategories();

        var catView = TestUtils.renderIntoDocument(<CategoriesView params={{categories: cats, location: '4050-234'}} />);
    });
});
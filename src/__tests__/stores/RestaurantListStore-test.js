'use strict';
jest.dontMock('../../js/stores/RestaurantListStore');
jest.dontMock('../../js/constants/Constants');
jest.dontMock('../mockData/restaurantList');
describe('RestaurantListStore', () => {
    let CONSTANTS = require('../../js/constants/Constants'), RestaurantListStore, AppDispatcher, callback, mockData, actionGetRestListStore;
    beforeEach(() => {
        mockData = require('../mockData/restaurantList');
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        AppDispatcher.register = jest.genMockFunction();
        RestaurantListStore = require('../../js/stores/RestaurantListStore');
        callback = AppDispatcher.register.mock.calls[0][0];
        // mock actions inside dispatch payloads
        actionGetRestListStore = {
            actionType: CONSTANTS.GET_REST_LIST,
            params: '4050-234',
            response: mockData
        };
    });
    it('registers a callback with the dispatcher', () => {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });
    it('checks right categories are returned', () => {
        let categories;
        callback(actionGetRestListStore);
        categories = RestaurantListStore.getCategories();
        expect(categories.length).toBe(5);
        expect(categories[0].name).toBe('Total');
        expect(categories[0].resultNumber).toBe(4);
        expect(categories[2].name).toBe('Chinesa');
        expect(categories[2].resultNumber).toBe(2);
    });
    it('checks if filtering by category returns the right results', () => {
        let filtered;
        callback(actionGetRestListStore);
        filtered = RestaurantListStore.filterByCategory();
        expect(filtered.length).toBe(4);
        expect(filtered[0].name).toBe('Torphy-Schoen 378');
        filtered = RestaurantListStore.filterByCategory(2);
        expect(filtered.length).toBe(2);
        expect(filtered[0].name).toBe('Hilpert-Hoppe 494');
    });
});
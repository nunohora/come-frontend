'use strict';
jest.dontMock('../../js/actions/RestaurantListActions');
describe('RestaurantListActions', () => {
    let RestaurantListActions, AppDispatcher, CONSTANTS, utils, $;
    beforeEach(() => {
        RestaurantListActions = require('../../js/actions/RestaurantListActions');
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
        CONSTANTS = require('../../js/constants/Constants');
        utils = require('../../js/utils');
        $ = require('jquery');
    });
    it('tests dispatcher is called with right params', () => {
        const params = 'EXPECTED_PARAMS', constant = CONSTANTS.GET_REST_LIST;
        spyOn(AppDispatcher, 'dispatch');
        spyOn(utils, 'getRestaurantsByLocation').andCallFake(() => {
            const dfd = new $.Deferred();
            dfd.resolve('RESOLVED');
            return dfd.promise();
        });
        RestaurantListActions.getRestListByLocation(params);
        expect(AppDispatcher.dispatch).toHaveBeenCalled();
        RestaurantListActions.getRestListByLocation(params);
        expect(AppDispatcher.dispatch).toHaveBeenCalledWith({
            actionType: constant,
            params: params
        });
    });
});
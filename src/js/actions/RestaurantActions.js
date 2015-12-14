import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import utils from '../utils';
import $ from 'jquery';

module.exports = {
    getRestById(id) {
        $.when(utils.getRestaurantById(id), utils.getRestaurantProducts(id))
            .done((place, products) => {
                const resp = {
                    place: place.place,
                    products: products.products,
                    meta: place.meta
                };

                AppDispatcher.dispatch({
                    actionType: Constants.GET_REST_BY_ID,
                    response: resp
                });
            });
    }
};
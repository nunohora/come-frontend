const AppDispatcher = require('../dispatcher/AppDispatcher')
const EventEmitter = require('events').EventEmitter;
const Constants = require('../constants/Constants');
const assign = require('object-assign');
const _ = require('underscore');

const CHANGE_EVENT = 'change';

let _store = {
    categories: [],
    restaurants: [],
    resultNumber: {}
};

const RestaurantListStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    /**
     * @param {function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getState() {
        return _store;
    },
    setState(params, response) {
        const categories = [{
                id: 0,
                name: 'Total',
                resultNumber: 0
            }];
        _.each(response.search, result => {
            _.each(result.categories, category => {
                const existing = _.findWhere(categories, { id: category.id });
                if (existing) {
                    existing.resultNumber = existing.resultNumber + 1;
                } else {
                    categories.push({
                        id: category.id,
                        name: category.name,
                        resultNumber: 1
                    });
                }
            });
        });
        categories[0].resultNumber = response.meta.total_results;
        _store = {
            categories: categories,
            restaurants: response.search,
            resultNumber: {
                number: response.meta.total_results,
                postcode: params
            }
        };
    },
    filterByCategory(catId) {
        let results;
        if (catId) {
            results = _.filter(_store.restaurants, restaurant => {
                const exists = _.some(restaurant.categories, category => {
                    return parseInt(catId, 10) === category.id;
                });
                return exists;
            });
        } else {
            results = _store.restaurants;
        }
        return results;
    },
    getCategories() {
        return _store.categories;
    },
    getResultNumber() {
        return _store.resultNumber;
    }
});
// Register callback to handle all updates
AppDispatcher.register(action => {
    switch (action.actionType) {
    case Constants.GET_REST_LIST:
        if (action.response) {
            RestaurantListStore.setState(action.params, action.response);
        }
        RestaurantListStore.emitChange();
        break;
    default:
        // no op
        break;
    }
});
module.exports = RestaurantListStore;
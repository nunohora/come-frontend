var AppDispatcher = require('dispatcher/AppDispatcher'),
    EventEmitter  = require('events').EventEmitter,
    Constants     = require('constants/Constants'),
    assign        = require('object-assign'),
    _             = require('underscore');

var CHANGE_EVENT = 'change';

var _store = {
    categories: [{
        id: 0,
        name: 'Total',
        resultNumber: 0
    }],
    restaurants: [],
    resultNumber: {
        number: 0,
        postcode: ''
    }
};

var RestaurantListStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getState: function () {
        return _store;
    },

    setState: function (response, params) {
        var categories = _store.categories;

        _.each(response.search, function (result) {
            _.each(result.categories, function (category) {
                var existing = _.findWhere(categories, {id: category.id});

                if (existing) {
                    existing.resultNumber = existing.resultNumber + 1;
                }
                else {
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
                postcode: params.location
            }
        };
    },

    filterByCategory: function (catId) {
        var results;

        if (catId) {
            results = _.filter(_store.restaurants, function (restaurant) {
                var exists = _.some(restaurant.categories, function (category) {
                    return parseInt(catId, 10) === category.id;
                });

                return exists;
            });
        }
        else {
            results = _store.restaurants;
        }

        return results;
    },

    getCategories: function () {
        return _store.categories;
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case Constants.GET_REST_LIST:
            RestaurantListStore.setState(action.response, action.params);
            RestaurantListStore.emitChange();
            break;

        default:
        // no op
            break;
    }
});

module.exports = RestaurantListStore;
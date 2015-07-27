var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter  = require('events').EventEmitter,
    Constants     = require('../constants/Constants'),
    assign        = require('object-assign'),
    _             = require('underscore');

var CHANGE_EVENT = 'change';

var _restaurant = {
    categories: [],
    restaurants: [],
    resultNumber: {}
};

var RestaurantStore = assign({}, EventEmitter.prototype, {

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
        return _restaurant;
    },

    setState: function (response) {
        debugger;
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

        _restaurant = {
            categories: categories,
            restaurants: response.search,
            resultNumber: {
                number: response.meta.total_results,
                postcode: params
            }
        };
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case Constants.GET_REST_BY_ID:
            if (action.response) {
                RestaurantStore.setState(action.response);
            }

            RestaurantStore.emitChange();
            break;

        default:
            // no op
            break;
    }
});

module.exports = RestaurantStore;
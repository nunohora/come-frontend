const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const Constants = require('../constants/Constants');
const assign = require('object-assign');
const _ = require('underscore');

const CHANGE_EVENT = 'change';

let _restaurant = {
    place: {},
    products: [],
    meta: {}
};

module.exports = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getState() {
        return _restaurant;
    },

    setState(response) {
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
AppDispatcher.register(action => {
    switch (action.actionType) {
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
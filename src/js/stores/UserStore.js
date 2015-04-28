var AppDispatcher = require('dispatcher/AppDispatcher'),
    EventEmitter  = require('events').EventEmitter,
    Constants     = require('constants/Constants'),
    assign        = require('object-assign'),
    _             = require('underscore');

var CHANGE_EVENT = 'change';

var _user = {};

var UserStore = assign({}, EventEmitter.prototype, {

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

  getState: function (params) {
    return _user;
  },

  setState: function (response, params) {}
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.USER_LOGIN:
      RestaurantListStore.setState(action.response, action.params);
      RestaurantListStore.emitChange();
      break;

    case Constants.USER_LOGOUT:
      RestaurantListStore.setState(action.response, action.params);
      RestaurantListStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = UserStore;
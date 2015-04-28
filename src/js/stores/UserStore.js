var AppDispatcher = require('dispatcher/AppDispatcher'),
    EventEmitter  = require('events').EventEmitter,
    Constants     = require('constants/Constants'),
    assign        = require('object-assign'),
    _             = require('underscore');

var CHANGE_EVENT = 'change';

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

  getState: function () {
    var user = localStorage.getItem('user'),
        state = user ? JSON.parse(user) : {};

    return state;
  },

  setState: function (response) {
    localStorage.setItem('user', JSON.stringify(response));
  },

  deleteState: function () {
    localStorage.removeItem('user');
    console.log('removed storage: ', localStorage.getItem('user'));
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.USER_LOGIN:
      UserStore.setState(action.response);
      UserStore.emitChange();
      break;

    case Constants.USER_LOGOUT:
      UserStore.deleteState();
      UserStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = UserStore;
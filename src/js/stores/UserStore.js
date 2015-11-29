const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const Constants = require('../constants/Constants');
const assign = require('object-assign');
const _ = require('underscore');

const CHANGE_EVENT = 'change';

module.exports = assign({}, EventEmitter.prototype, {
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
        const user = localStorage.getItem('user'), state = user ? JSON.parse(user) : {};
        return { user: state };
    },
    setState(response) {
        localStorage.setItem('user', JSON.stringify(response));
    },
    deleteState() {
        localStorage.removeItem('user');
    }
});

// Register callback to handle all updates
AppDispatcher.register(action => {
    switch (action.actionType) {
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
        break;
    }
});
'use strict';

var Dispatcher     = require('./Dispatcher'),
    copyProperties = require('react/lib/copyProperties');

var AppDispatcher = copyProperties(new Dispatcher(), {
  handleAction(action) {
    console.log('server action', action);

    if (!action.type) {
      throw new Error('Empty action.type: you likely mistyped the action.');
    }

    this.dispatch({
      action: action
    });
  }
});

module.exports = AppDispatcher;
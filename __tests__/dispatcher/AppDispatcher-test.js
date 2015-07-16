"use strict";

jest.dontMock('dispatcher/AppDispatcher');

describe('AppDispatcher', function() {
    var AppDispatcher;

    beforeEach(function() {
        AppDispatcher = require('dispatcher/AppDispatcher');
    });

    it('tests nothing', function () {
        expect(1).toBe(1);
    })
});
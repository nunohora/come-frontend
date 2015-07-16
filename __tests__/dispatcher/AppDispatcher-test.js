"use strict";

jest.dontMock('../../src/js/dispatcher/AppDispatcher');

describe('AppDispatcher', function() {
    var AppDispatcher;

    beforeEach(function() {
        AppDispatcher = require('../../src/js/dispatcher/AppDispatcher');
    });

    it('tests nothing', function () {
        expect(1).toBe(1);
    })
});
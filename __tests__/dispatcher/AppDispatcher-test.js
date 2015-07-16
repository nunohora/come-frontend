"use strict";

jest.dontMock('../../js/dispatcher/AppDispatcher');

describe('AppDispatcher', function() {
    var AppDispatcher;

    beforeEach(function() {
        AppDispatcher = require('../../js/dispatcher/AppDispatcher');
    });

    it('tests nothing', function () {
        expect(1).toBe(1);
    })
});
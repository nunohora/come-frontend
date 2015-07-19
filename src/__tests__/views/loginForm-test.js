"use strict";

jest.dontMock('../../js/views/forms/login-form.jsx');

xdescribe('Login Form', function() {
    var React= require('react/addons'),
        TestUtils = React.addons.TestUtils,
        UserActions;

    beforeEach(function() {
        UserActions = require('../../js/actions/UserActions');
    });

    it('tests submit button is disabled', function () {
        var LoginForm = require('../../js/views/forms/login-form.jsx'),
            form = React.createFactory(LoginForm);

        var form = TestUtils.renderIntoDocument(React.render(form));

    });
});
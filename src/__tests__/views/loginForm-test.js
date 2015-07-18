"use strict";

jest.dontMock('../../js/views/forms/login-form.jsx');

describe('Login Form', function() {
    var React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        UserActions;

    beforeEach(function() {
        UserActions = require('../../js/actions/UserActions');
    });

    it('tests that dispatcher is called', function () {
        var LoginForm = require('../../js/views/forms/login-form.jsx');

        var form = TestUtils.renderIntoDocument(<LoginForm />);

        var button = TestUtils.findRenderedDOMComponentWithTag(form, 'button');

        console.log('button');
        console.log(button);
    });
});
"use strict";

jest.dontMock('../../js/views/forms/login-form.jsx');

describe('Login Form', function() {
    var UserActions, React, TestUtils, LoginForm;

    beforeEach(function() {
        UserActions = require('../../js/actions/UserActions');
        React = require('react/addons');
        TestUtils = React.addons.TestUtils;
        LoginForm = require('../../js/views/forms/login-form.jsx');
    });

    it.only('tests that error message shows if invalid email or empty fields are used', function () {
        var form = TestUtils.renderIntoDocument(<LoginForm />);

        TestUtils.Simulate.click(form.refs.email);
        TestUtils.Simulate.blur(form.refs.email);

        expect(form.refs.helpBlock.props.children).toBe('"email" must be a string');

        TestUtils.Simulate.change(form.refs.email, {target: {value: "email@example.com"}});
        TestUtils.Simulate.blur(form.refs.email);

        expect(form.refs.helpBlock).toBeUndefined();

        TestUtils.Simulate.click(form.refs.password);
        TestUtils.Simulate.blur(form.refs.password);

        expect(form.refs.helpBlock.props.children).toBe('"password" must be a string');
    });
});
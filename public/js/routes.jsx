/** @jsx React.DOM */
define(function (require) {
  var React         = require('react'),
      ReactRouter   = require('react-router'),
      Route         = ReactRouter.Route,
      DefaultRoute  = ReactRouter.DefaultRoute,
      NotFoundRoute = ReactRouter.NotFoundRoute,
      Redirect      = ReactRouter.Redirect;

  var App       = require('jsx!views/app'),
      Home      = require('jsx!views/home'),
      ContactUs = require('jsx!views/contactus'),
      Postcode  = require('jsx!views/postcode'),
      NotFound  = require('jsx!views/notfound');

  var routes = (
    <Route handler={App} path="/">
      <Route name="contact-us" handler={ContactUs} path="/contact-us" />
      <Route name="postcode" handler={Postcode} path="/postcode" />
      <DefaultRoute handler={Home} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );

  ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
});
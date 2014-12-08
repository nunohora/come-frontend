/** @jsx React.DOM */
define(function (require) {
  var React         = require('react'),
      ReactRouter   = require('react-router'),
      Route         = ReactRouter.Route,
      DefaultRoute  = ReactRouter.DefaultRoute,
      NotFoundRoute = ReactRouter.NotFoundRoute,
      Redirect      = ReactRouter.Redirect;

  var App             = require('jsx!views/app'),
      Home            = require('jsx!views/home'),
      ContactUs       = require('jsx!views/contact-us'),
      RestaurantList  = require('jsx!views/restaurants-list'),
      NotFound        = require('jsx!views/not-found');

  var routes = (
    <Route handler={App} path="/">
      <Route name="contact-us" handler={ContactUs} path="/contact-us" />
      <Route name="postcode" handler={RestaurantList} path="/search-postcode/:pcode/" />
      <DefaultRoute handler={Home} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );

  ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });
});
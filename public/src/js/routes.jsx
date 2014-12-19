/** @jsx React.DOM */
define(function (require) {
  var React         = require('react'),
      ReactRouter   = require('react-router'),
      Route         = ReactRouter.Route,
      DefaultRoute  = ReactRouter.DefaultRoute,
      NotFoundRoute = ReactRouter.NotFoundRoute,
      Redirect      = ReactRouter.Redirect;

  var App             = require('views/app'),
      Home            = require('views/home'),
      ContactUs       = require('views/contact-us'),
      SearchResults   = require('views/search-results/main'),
      NotFound        = require('views/not-found');

  var routes = (
    <Route handler={App} params={this.params} path="/">
      <Route name="contact-us" handler={ContactUs} path="/contact-us" />
      <Route name="postcode" handler={SearchResults} params={this.params} path="/search-postcode/:pcode/" />
      <DefaultRoute handler={Home} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );

  ReactRouter.run(routes, function (Handler, state) {
    React.render(<Handler params={state.params}/>, document.body);
  });
});
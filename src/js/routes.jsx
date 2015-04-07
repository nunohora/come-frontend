/** @jsx React.DOM */
var React         = require('react'),
    ReactRouter   = require('react-router'),
    Route         = ReactRouter.Route,
    DefaultRoute  = ReactRouter.DefaultRoute,
    NotFoundRoute = ReactRouter.NotFoundRoute,
    Redirect      = ReactRouter.Redirect;

var App             = require('views/app'),
    Home            = require('views/home'),
    Help            = require('views/help'),
    LoginPage       = require('views/login-page'),
    Register        = require('views/register'),
    SearchResults   = require('views/search-results/main'),
    NotFound        = require('views/not-found');

var routes = (
  <Route handler={App} params={this.params} path="/">
    <Route name="postcode" handler={SearchResults} params={this.params} path="/search-postcode/:pcode/" />
    <Route name="help" handler={Help} path="/help" />
    <Route name="login" handler={LoginPage} path="/login" />
    <Route name="register" handler={Register} path="/register" />
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

ReactRouter.run(routes, function (Handler, state) {
  React.render(<Handler params={state.params} path={state.path} />, document.body);
});
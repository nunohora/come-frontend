/** @jsx React.DOM */
var React         = require('react'),
    ReactRouter   = require('react-router'),
    Route         = ReactRouter.Route,
    DefaultRoute  = ReactRouter.DefaultRoute,
    NotFoundRoute = ReactRouter.NotFoundRoute,
    Redirect      = ReactRouter.Redirect;

var App           = require('views/app'),
    Home          = require('views/home'),
    Help          = require('views/help'),
    LoginPage     = require('views/login-page'),
    SignupPage    = require('views/signup-page'),
    SearchResults = require('views/search-results/main'),
    NotFound      = require('views/not-found');

var routes = (
  <Route handler={App} params={this.params} path="/">
    <Route name="search" handler={SearchResults} params={this.params} path="/search/:location" />
    <Route name="categorySearch" handler={SearchResults} params={this.params} path="/search/:location/:category" />
    <Route name="help" handler={Help} path="/help" />
    <Route name="login" handler={LoginPage} path="/login" />
    <Route name="signup" handler={SignupPage} path="/signup" />
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

ReactRouter.run(routes, function (Handler, state) {
  React.render(<Handler params={state.params} path={state.path} />, document.body);
});
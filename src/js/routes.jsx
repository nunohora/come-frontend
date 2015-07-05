/** @jsx React.DOM */
var React         = require('react'),
    ReactRouter   = require('react-router'),
    Route         = ReactRouter.Route,
    DefaultRoute  = ReactRouter.DefaultRoute,
    NotFoundRoute = ReactRouter.NotFoundRoute,
    Redirect      = ReactRouter.Redirect;

var App            = require('views/app'),
    Home           = require('views/home'),
    Help           = require('views/help'),
    LoginPage      = require('views/login-page'),
    SignupPage     = require('views/signup-page'),
    RestaurantList = require('views/restaurant-list/main'),
    RestaurantPage = require('views/restaurant-page/main'),
    NotFound       = require('views/not-found');

var routes = (
    <Route handler={App} params={this.params} path="/">
        <Route name="search" handler={RestaurantList} params={this.params} path="/search/:location">
            <Route name="searchByCat" handler={RestaurantList} params={this.params} path=":category/:id" />
        </Route>
        <Route name="help" handler={Help} path="/help" />
        <Route name="login" handler={LoginPage} path="/login" />
        <Route name="signup" handler={SignupPage} path="/signup" />
        <Route name="places" handler={RestaurantPage} path="/places/:id/:name" />
        <DefaultRoute handler={Home} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

ReactRouter.run(routes, function (Handler, state) {
    React.render(<Handler params={state.params} path={state.path} />, document.body);
});
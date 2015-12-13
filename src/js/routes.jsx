import React from 'react';
import { Route, DefaultRoute, NotFoundRoute, Redirect }from 'react-router';
import { render } from 'react-dom';

import App from './views/app.jsx';
import Home from './views/home.jsx';
import Help from './views/help.jsx';
import LoginPage from './views/login-page.jsx';
import SignupPage from './views/signup-page.jsx';
import RestaurantList from './views/restaurant-list/main.jsx';
import RestaurantPage from './views/restaurant-page/main.jsx';
//import NotFound from '/views/not-found.jsx';

render((
    <Route component={App} path="/">
        <Route component={RestaurantList}
               path="/search/:location/?:category?/?:id?" />
        <Route component={Help} path="/help" />
        <Route component={LoginPage} path="/login" />
        <Route component={SignupPage} path="/signup" />
        <Route component={RestaurantPage} path="/places/:id/:slug" />
        <DefaultRoute component={Home} />
    </Route>
), document.body);
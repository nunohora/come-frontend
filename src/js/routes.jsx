import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

import App from './views/app.jsx';
import Home from './views/home.jsx';
import Help from './views/help.jsx';
import LoginPage from './views/login-page.jsx';
import SignupPage from './views/signup-page.jsx';
import RestaurantList from './views/restaurant-list/main.jsx';
import RestaurantPage from './views/restaurant-page/main.jsx';
//import NotFound from '/views/not-found.jsx';

ReactDOM.render((
    <Router>
        <Route component={App} path="/">
            <Route component={RestaurantList}
                   path="/search/:location/?:category?/?:id?" />
            <Route component={Help} path="/help" />
            <Route component={LoginPage} path="/login" />
            <Route component={SignupPage} path="/signup" />
            <Route component={RestaurantPage} path="/places/:id/:slug" />
            <Route component={Home} path="*" />
        </Route>
    </Router>
), document.body);
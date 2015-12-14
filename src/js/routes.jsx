import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory }  from 'history/lib';
import App from './views/app.jsx';
import Home from './views/home.jsx';
import Help from './views/help.jsx';
import LoginPage from './views/login-page.jsx';
import SignupPage from './views/signup-page.jsx';
import RestaurantList from './views/restaurant-list/main.jsx';
import RestaurantPage from './views/restaurant-page/main.jsx';
import NotFound from './views/not-found.jsx';

const history = createHistory({
    queryKey: false
});

ReactDOM.render((
    <Router location="history">
        <Route component={App} path="/">
            <IndexRoute component={Home} />
            <Route component={RestaurantList}
                   path="/search/:location/?:category?/?:id?" />
            <Route component={Help} path="/help" />
            <Route component={LoginPage} path="/login" />
            <Route component={SignupPage} path="/signup" />
            <Route component={RestaurantPage} path="/places/:id/:slug" />
            <Route component={NotFound} path="*" />
        </Route>
    </Router>
), document.getElementById('main-wrapper'));
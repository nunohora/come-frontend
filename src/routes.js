import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import Home from 'components/Home'
import SearchResult from 'containers/SearchResult'
import Help from 'containers/Help'
import Restaurant from 'containers/Restaurant'
import RestaurantMenu from 'components/RestMenu'
import RestaurantReviews from 'components/RestReviews'
import RestaurantInfo from 'components/RestInfo'
import PrivacyPolicy from 'components/PrivacyPolicy'
import CheckoutConfirmDetails from 'containers/CheckoutConfirmDetails'
import CheckoutConfirmTime from 'containers/CheckoutConfirmTime'
import CheckoutConfirmPayment from 'containers/CheckoutConfirmPayment'
import NotFound from 'containers/NotFound'
import User from 'containers/User'
import MyAccount from 'containers/MyAccount'
import MyOrders from 'containers/MyOrders'
import MyPayments from 'containers/MyPayments'
import MyAddresses from 'containers/MyAddresses'

function isAuthenticated(nextState, replace) {
    if (!localStorage.getItem('id_token')) {
        replace({
            pathname: '/notfound',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

export default (store) => (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchResult} path='search/:location' />
        <Route component={SearchResult} path='search/:location/:slug' />
        <Route component={User} path='/user' onEnter={isAuthenticated} >
            <Route component={MyAccount} path='my-account' />
            <Route component={MyOrders} path='my-orders' />
            <Route component={MyPayments} path='my-payments' />
            <Route component={MyAddresses} path='my-addresses' />
        </Route>
        <Route path='/places/:slug' component={Restaurant} >
            <IndexRoute component={RestaurantMenu} />
            <Route component={RestaurantReviews} path='reviews' />
            <Route component={RestaurantInfo} path='info' />
        </Route>
        <Route path='/checkout/:basketId'>
            <IndexRoute component={CheckoutConfirmDetails} />
            <Route component={CheckoutConfirmTime} path="time" />
            <Route component={CheckoutConfirmPayment} path='payment' />
        </Route>
        <Route component={Help} path='/help' />
        <Redirect from='login/callback' to='/' />
        <Redirect path='/user' to='/user/my-account' />
        <Route component={NotFound} path='*' />
    </Route>
)
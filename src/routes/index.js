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
import CheckoutPayment from 'containers/CheckoutPayment'
import NotFound from 'containers/NotFound'
import User from 'containers/User'
import MyAccount from 'containers/MyAccount'
import MyOrders from 'containers/MyOrders'
import MyPayments from 'containers/MyPayments'
import MyAddresses from 'containers/MyAddresses'

export default (store) => (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchResult} path='search/:location' />
        <Route component={SearchResult} path='search/:location/:slug' />
        <Route component={User} path='/user'>
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
            <Route component={CheckoutPayment} path='payment' />
        </Route>
        <Route component={Help} path='/help' />
        <Route component={NotFound} path='*' />
        <Redirect from='login/callback' to='/' />
    </Route>
)
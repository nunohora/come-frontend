import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
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

export default (store) => (
    <Route path='/' name="Home" component={CoreLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchResult} path='search/:location' />
        <Route component={SearchResult} path='search/:location/:slug' />
        <Route name="" path='/places/:slug' component={Restaurant} >
            <IndexRoute component={RestaurantMenu} />
            <Route component={RestaurantReviews} path="reviews" />
            <Route component={RestaurantInfo} path="info" />
        </Route>
        <Route path='/checkout/:basketId'>
            <IndexRoute component={CheckoutConfirmDetails} />
            <Route component={CheckoutPayment} path="payment"/>
        </Route>
        <Route component={Help} path='/help' />
        <Route component={NotFound} path='*' />
    </Route>
)
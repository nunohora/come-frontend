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
import PrivacyPolicy from 'components/PrivacyPolicy'
import CheckoutConfirmDetails from 'containers/CheckoutConfirmDetails'
import NotFound from 'containers/NotFound'

export default (store) => (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchResult} path='search/:location' />
        <Route component={SearchResult} path='search/:location/:id' />
        <Route component={SearchResult} path='search/:location/:id/:category' />
        <Route component={Help} path='/help' />
        <Route path='/places/:id/:slug'>
            <IndexRoute component={Restaurant} />
            <Route component={Restaurant} path="reviews" />
            <Route component={Restaurant} path="info" />
        </Route>
        <Route path='/checkout/:basketId'>
            <IndexRoute component={CheckoutConfirmDetails} />
        </Route>
        <Route component={NotFound} path='*' />
    </Route>
)
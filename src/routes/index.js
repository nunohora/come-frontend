import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

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
import NotFound from 'containers/NotFound'

export default (store) => (
    <Route path='/' component={ CoreLayout }>
        <IndexRoute component={ Home } />
        <Route component={ SearchResult } path='/search/:location' />
        <Route component={ SearchResult } path='/search/:location/:id' />
        <Route component={ SearchResult } path='/search/:location/:id/:category' />
        <Route component={ Help } path='/help' />
        <Route component={ Restaurant } path='/places/:id/:slug/menu' />
        <Route component={ Restaurant } path='/places/:id/:slug/reviews' />
        <Route component={ Restaurant } path='/places/:id/:slug/info' />
        <Redirect from="/places/:id/:slug" to="/places/:id/:slug/menu" />
        <Route component={ NotFound } path='*' />
    </Route>
)
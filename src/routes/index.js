import React from 'react'
import { Route, IndexRoute } from 'react-router'
// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import Home from 'components/Home/Home'
import SearchResult from 'containers/SearchResult/SearchResult'
import Help from 'containers/Help/Help'
import Login from 'containers/Login/Login'
import Signup from 'containers/Signup/Signup'
import Restaurant from 'containers/Restaurant/Restaurant'
import NotFound from 'containers/NotFound/NotFound'

export default (store) => (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={Home} />
        <Route component={SearchResult} path='/search/:location(/?:category?)(/?:id?)' />
        <Route component={Help} path='/help' />
        <Route component={Login} path='/login' />
        <Route component={Signup} path='/signup' />
        <Route component={Restaurant} path='/places/:id/:slug' />
        <Route component={NotFound} path='*' />
    </Route>
)
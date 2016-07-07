import React from 'react'
import ReactDOM from 'react-dom'
import ga from 'react-ga'
import firebase from 'firebase'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import makeRoutes from './routes'
import Root from 'containers/Root/index'
import configureStore from './configureStore'

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: __BASENAME__
})

//Initialize google analytics
ga.initialize('UA-78777053-2', {
    debug: true
})


//Initialize Firebase
const config = {
    apiKey: "AIzaSyAasMVi3qKg4HRCihCqdRTQu88JTxBAdgc",
    authDomain: "come-frontend.firebaseapp.com",
    databaseURL: "https://come-frontend.firebaseio.com",
    storageBucket: "come-frontend.appspot.com"
}
firebase.initializeApp(config)

// Create redux-store store and sync with react-router-redux-store. We have installed the
// react-router-redux-store reducer under the key "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux-store of its location.
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router
})

history.listen(location => {
    ga.pageview(location.pathname)
})

// Now that we have the Redux store, we can create our routes. We provide
// the store to the route definitions so that routes have access to it for
// hooks such as `onEnter`.
const routes = makeRoutes(store)

// Now that redux-store and react-router have been configured, we can render the
// React application to the DOM!
ReactDOM.render(
    <Root history={history} routes={routes} store={store} />,
    document.getElementById('root')
)

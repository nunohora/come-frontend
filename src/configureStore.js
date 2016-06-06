/*global require module */
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { modules, api } from 'nuno-redux-store'
import { routerMiddleware, routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import lock from './reducers/lock'

export default function configureStore(initialState = {}, history) {
    // Compose final middleware
    let middleware = applyMiddleware(thunk, routerMiddleware(history), api)

    // Combining all the reducers, common and specific to web
    const combinedReducers = combineReducers({
        lock: lock.reducer,
        restaurant: modules.restaurant.reducer,
        restaurantList: modules.restaurantList.reducer,
        router,
        form
    })

    // Create final store and subscribe router in debug env ie. for devtools
    const store = middleware(createStore)(combinedReducers, initialState)

    if (module.hot) {
        module.hot.accept('nuno-redux-store', () => {
            const nextRootReducer = combinedReducers.default

            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}

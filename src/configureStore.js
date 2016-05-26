/*global require module */
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducers, api } from '@come/redux-store'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export default function configureStore(initialState = {}, history) {
    // Compose final middleware
    let middleware = applyMiddleware(thunk, routerMiddleware(history), api)

    // Combining all the reducers, common and specific to web
    const combinedReducers = combineReducers({
        ...reducers,
        routing: routerReducer,
        formReducer
    })

    // Create final store and subscribe router in debug env ie. for devtools
    const store = middleware(createStore)(combinedReducers, initialState)
    
    if (module.hot) {
        module.hot.accept('@come/redux-store', () => {
            const nextRootReducer = combinedReducers.default

            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}

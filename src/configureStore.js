/*global require module */
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { modules, api, translations } from 'nuno-redux-store'
import { routerMiddleware, routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { addLocaleData } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import en from 'react-intl/locale-data/en'
import { intlReducer } from 'react-intl-redux'
import lock from './reducers/lock'

addLocaleData([...pt, ...en])

export default function configureStore(initialState = {}, history) {
    // Compose final middleware
    let middleware = applyMiddleware(thunk, routerMiddleware(history), api)

    const state = {
        ...initialState,
        intl: {
            defaultLocale: 'pt',
            locale: 'pt',
            messages: {
                ...translations.pt
            }
        }
    }

    // Combining all the reducers, common and specific to web
    const combinedReducers = combineReducers({
        lock: lock.reducer,
        restaurant: modules.restaurant.reducer,
        restaurantList: modules.restaurantList.reducer,
        intl: intlReducer,
        router,
        form
    })

    // Create final store and subscribe router in debug env ie. for devtools
    const store = middleware(createStore)(combinedReducers, state)

    if (module.hot) {
        module.hot.accept('nuno-redux-store', () => {
            const nextRootReducer = combinedReducers.default

            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}

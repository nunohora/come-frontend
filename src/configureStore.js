/*global require module */
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { api, translations } from 'redux-store'
import { routerMiddleware, routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { addLocaleData } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import en from 'react-intl/locale-data/en'
import { intlReducer } from 'react-intl-redux'

import restaurantList from 'redux-store/modules/restaurantList'
import restaurant from 'redux-store/modules/restaurant'
import lock from 'redux-store/modules/lock'
import shoppingCart from 'redux-store/modules/shoppingCart'

addLocaleData([...pt, ...en])

export default function configureStore(initialState = {}, history) {
    // Redux logger middleware
    const logger = createLogger()

    // Compose final middleware
    let middleware = applyMiddleware(thunk, routerMiddleware(history), api, logger)

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

    // Combining all the modules
    const combinedReducers = combineReducers({
        lock,
        restaurant,
        restaurantList,
        shoppingCart,
        intl: intlReducer,
        router,
        form
    })

    // Create final store and subscribe router in debug env ie. for devtools
    const store = middleware(createStore)(combinedReducers, state)

    if (module.hot) {
        module.hot.accept('./redux-store', () => {
            const nextRootReducer = combinedReducers.default

            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}

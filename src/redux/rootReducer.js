import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import restaurant from './modules/restaurant'
import restaurantList from './modules/restaurantList'
import user from './modules/user'

export default combineReducers({
    restaurant,
    restaurantList,
    user,
    router
})

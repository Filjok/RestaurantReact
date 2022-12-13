import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantReducer} from './reducers/restaurantReducer'

const reducers = combineReducers({
    restaurantList: restaurantReducer
})
const middleware  = [thunk]
const store = createStore(reducers,applyMiddleware(...middleware))

export default store

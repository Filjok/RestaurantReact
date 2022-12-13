import {RESTAURANT_LIST_SUCCESS,RESTAURANT_LIST_FAIL} from '../constants'

export const restaurantReducer = (state ={restaurant:[]},action)=>{
    switch (action.type){
        case RESTAURANT_LIST_SUCCESS:
            return {restaurant: action.payload}
        case RESTAURANT_LIST_FAIL:
            return {restaurant : action.payload}

        default:
            return state
    }
}
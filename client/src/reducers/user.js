/* USER REDUCER */
import {USER, UPDATE_USER} from '../actions/index';

export default (state = {}, action) =>{
    switch(action.type){
        case USER:
            return action.payload;
        case UPDATE_USER:
            return action.payload;
        default: 
            return state;
    }
}
/* USER REDUCER */
import {USER} from '../actions/index';

export default function( state = {}, action){
    switch(action.type){
        case USER:
            return action.payload
        
        default: 
            return state;
    }
}
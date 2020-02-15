/*TRANSACTION REDUCER */

import {ADD_TRANSACTION, GET_TRANSACTIONS} from '../actions/index';

export default (state = [], action) => {
    switch(action.type){
        case ADD_TRANSACTION: 
            return [...state,action.payload]; 
        case GET_TRANSACTIONS:
            return action.payload; 
        default:
            return state; 
    }
} 
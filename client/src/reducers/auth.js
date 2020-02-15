/* AUTHENTICATION REDUCER */

import { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR, UNAUTHENTICATED_SUCCESS, UNAUTHENTICATED_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/index';

export default (state={}, action) => {
    switch(action.type){
        case AUTHENTICATION_SUCCESS:
            return {...state, authenticated: true};
        case AUTHENTICATION_ERROR:
            return {...state, error: action.payload};
        case UNAUTHENTICATED_SUCCESS:
            return{...state, authenticated:false};
        case UNAUTHENTICATED_ERROR:
            return{...state, error: action.payload};
        case SIGNUP_SUCCESS:
            return {...state, message: action.payload};
        case SIGNUP_ERROR:
            return{...state, error: action.payload};
        default:
            return state;        
    }
}
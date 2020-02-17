import { CHECKOUT, CHECKOUT_ERROR, CLEAR_CART, GET_QUOTE } from '../actions/index';


export default (state = {}, action) => {
    switch (action.type) {
        case CHECKOUT:
            return action.payload;
        case CHECKOUT_ERROR:
            return { error: action.payload };
        case CLEAR_CART:
            return action.payload;
        case GET_QUOTE:
            return action.payload;
        default:
            return state;
    }
}
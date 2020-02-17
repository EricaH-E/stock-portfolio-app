import { CHECKOUT, CHECKOUT_ERROR, CLEAR_CART } from '../actions/index';


export default (state = {}, action) => {
    switch (action.type) {
        case CHECKOUT:
            return action.payload;
        case CHECKOUT_ERROR:
            return { error: action.payload };
        case CLEAR_CART:
            return action.payload;
        default:
            return state;
    }
}
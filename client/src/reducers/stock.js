/* STOCK REDUCER: GOES TO USER PORFOLIO DISPLAY */

import { ADD_STOCK, GET_STOCKS, UPDATE_STOCK } from '../actions/index';

export default (state = [], action) => {
    switch (action.type) {
        case GET_STOCKS:
            return action.payload;
        case ADD_STOCK:
            return [...state, action.payload];
        case UPDATE_STOCK:
            const { _id } = action.payload;
            return state.map(stock => {
                if (stock._id === _id) {
                    stock = action.payload;
                }
                return stock;
            });
        default:
            return state;
    }
}
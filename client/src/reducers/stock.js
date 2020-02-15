/* STOCK REDUCER: GOES TO USER PORFOLIO DISPLAY */

import{ ADD_STOCK, GET_STOCKS, UPDATE_STOCK} from '../actions/index';

export default (state=[],action) => {
    switch(action.type){
        case GET_STOCKS:
            return action.payload; 
        case ADD_STOCK: 
            return [...state,action.payload];
        case UPDATE_STOCK:
            const {id, shares} = action.payload;
            return state.map(stock =>{ 
                if(stock.id === id){
                    stock.shares = shares; 
                }
                return stock; 
            }); 
        default:
            return state; 
    }
}
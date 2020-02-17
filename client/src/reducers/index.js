import { combineReducers } from 'redux';
import UserReducer from './user';
import TransactionReducer from './transaction';
import StockReducer from './stock';
import AuthReducer from './auth';
import CheckoutReducer from './cart'
    ;

//makes all reducers accessible from rootReducer 
const rootReducer = combineReducers({
    user: UserReducer,
    transactions: TransactionReducer,
    stocks: StockReducer,
    auth: AuthReducer,
    cart: CheckoutReducer,

});

export default rootReducer; 
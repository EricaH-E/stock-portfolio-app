import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';


// Individual reducers altogether under an alias;
import rootReducer from '../reducers/index';
//const rootReducer = combineReducers(allReducers);

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, middleware,);

export default store;
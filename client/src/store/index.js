import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';


// Individual reducers altogether under an alias;
import rootReducer from '../reducers/index';
//const rootReducer = combineReducers(allReducers);

const saveHistory = (state) => {
    try{
        const serializedHistory = JSON.stringify(state);
        localStorage.setItem('state', serializedHistory)
    }
    catch(e){
        console.log(e);
    }
}

const getHistory = ()=> {
    try{
        const serializedHistory = localStorage.getItem('state');
        if(serializedHistory === null) return undefined;
        return JSON.parse(serializedHistory);
    }
    catch(e){
        console.log(e);
        return undefined;
    }
}

const savedHistory = getHistory(); 
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(
    rootReducer, 
    savedHistory,
    middleware,
    );

store.subscribe(()=> saveHistory(store.getState()))

export default store;
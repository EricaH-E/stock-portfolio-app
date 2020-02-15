/*TRANSACTIONS ACTIONS & THUNKS */
import axios from 'axios';


import {ADD_TRANSACTION, GET_TRANSACTIONS} from './index';

const config = {}; 

export const add_transaction = ({ticker, action, shares, price, user}) => (dispatch) => {
    const body = JSON.stringify ({ticker, action, shares, price})

    axios.post(`/api/${user}/transaction`, body, config)
    .then(res =>{ 
        dispatch({
            type: ADD_TRANSACTION,
            payload: res.data,
        })
    })
    .catch(err => {
        console.log(err); 
    })
    
}

export const get_transactions = (user) =>  (dispatch) =>{
    
    axios.get(`/api/${user}/transactions`, config)
    .then( res => {
        dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data,
        })
        .catch(err => {
            console.log(err); 
        })
    })
}


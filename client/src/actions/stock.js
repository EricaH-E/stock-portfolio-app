/* STOCK ACTIONS */
import axios from "axios";

import { ADD_STOCK, GET_STOCKS, UPDATE_STOCK } from "./index";
import {authHeader as config } from './index';


export const add_stock = ({ticker, shares, user}) => (dispatch) => { 
        const body = JSON.stringify({ticker, shares});
        axios.post(`http://localhost:3001/api/users/${user}/stock`, body, config())
        .then(res => {
            console.log(res); 
            dispatch({
                type:ADD_STOCK,
                payload: res.data.data, 
            })
        })
        .catch(error =>{
            console.log(error.response.data);
        })
}

export const get_stocks = (user) =>  (dispatch) => {
    axios.get(`http://localhost:3001/api/users/${user}/portfolio`,config())
    .then( res => {
        dispatch({
            type: GET_STOCKS,
            payload: res.data.data,
        })
    })
} 

export const update_stock = ({stock, shares, user}) => (dispatch) => {
    const body = JSON.stringify({ shares});
    axios.patch(`http://localhost:3001/api/users/${user}/stocks/${stock}`, body, config())
    .then(res => {
        dispatch({
            type: UPDATE_STOCK,
            payload: res.data.data, 
        })
    })
    .catch(error =>{
        console.log(error.response.data);
    })
} 






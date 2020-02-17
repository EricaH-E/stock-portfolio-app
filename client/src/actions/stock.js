/* STOCK ACTIONS */
import axios from "axios";

import { ADD_STOCK, GET_STOCKS, UPDATE_STOCK } from "./index";
import { authHeader as config } from './index';


export const add_stock = ({ ticker, shares, user, latestPrice }) => (dispatch) => {
    const body = JSON.stringify({ ticker, shares, latestPrice });
    axios.post(`/api/users/${user}/stock`, body, config())
        .then(res => {
            console.log(res);
            dispatch({
                type: ADD_STOCK,
                payload: res.data.data,
            })
        })
        .catch(error => {
            console.log(error.response.data);
        })
}

export const get_stocks = (user) => (dispatch) => {
    axios.get(`/api/users/${user}/portfolio`, config())
        .then(res => {
            dispatch({
                type: GET_STOCKS,
                payload: res.data.data,
            })
        })
        .catch(error => {
            console.log(error.response);
        })
}

export const update_stock = ({ stock, user }, update) => (dispatch) => {
    const body = JSON.stringify(update);
    axios.patch(`/api/users/${user}/stocks/${stock}`, body, config())
        .then(res => {
            dispatch({
                type: UPDATE_STOCK,
                payload: res.data.data,
            })
        })
        .catch(error => {
            console.log(error.response);
        })
}






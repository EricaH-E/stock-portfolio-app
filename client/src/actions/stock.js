/* STOCK ACTIONS */
 
import { ADD_STOCK, GET_STOCKS, UPDATE_STOCK } from "./index";
import axios from "axios";


// define authorization header config function 
const config = {}; 

export const add_stock = ({name, ticker, shares, user}) => (dispatch) => {
        const body = JSON.stringify({name, ticker, shares});
        axios.post(`/api/${user}/stock`, body, config)
        .then(res => {
            dispatch({
                type:ADD_STOCK,
                payload: res.data, 
            })
        })
        .catch(err =>{
            //if user already owns this stock then update existing 
            dispatch(update_stock({stock:err.data, shares, user })); 
        })
}

export const get_stocks = (user) =>  (dispatch) => {
    axios.get('/api/:user/portfolio',config)
    .then( res => {
        dispatch({
            type: GET_STOCKS,
            payload: res.data,
        })
    })
} 

export const update_stock = ({stock, shares, user}) => (dispatch) => {
    const body = JSON.stringify({ shares});
    axios.patch(`/api/${user}/stock/${stock}`, body, config)
    .then(res => {
        dispatch({
            type: UPDATE_STOCK,
            payload: res.data, 
        })
    })
    .catch(err =>{
        //if user already owns this stock then update existing 
        dispatch(update_stock({stock:err.data, shares })); 
    })
} 






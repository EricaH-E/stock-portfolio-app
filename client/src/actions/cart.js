
import { CHECKOUT, CHECKOUT_ERROR, CLEAR_CART } from './index';
import axios from 'axios';


const URL_BASE = 'https://cloud.iexapis.com/v1/stock/';
const URL_QUERY = '/batch?types=quote&token=';

export const checkout = ({ ticker, shares }) => (dispatch) => {

    axios.get(`${URL_BASE}${ticker}${URL_QUERY}${process.env.REACT_APP_API_KEY}`)
        .then(res => {

            //parse response
            const { latestPrice } = res.data.quote;
            //create object to send to store
            const data = {
                ticker,
                shares,
                latestPrice,
                cost: (latestPrice * shares).toFixed(2),
            }
            dispatch({
                type: CHECKOUT,
                payload: data,
            })

        })
        .catch(error => {
            if (error.response.status === 404) {
                dispatch({
                    type: CHECKOUT_ERROR,
                    payload: 'Invalid Ticker',
                })
            }
        })

}

export const clear_cart = () => (dispatch) => {
    dispatch({
        type: CLEAR_CART,
        payload: {},
    })
}
/*TRANSACTIONS ACTIONS  */
import axios from 'axios';

import { ADD_TRANSACTION, GET_TRANSACTIONS } from './index';
import { authHeader as config } from './index';

export const add_transaction = ({ ticker, action, shares, cost, user }) => (dispatch) => {
    const body = JSON.stringify({ ticker, action, shares, cost });

    axios.post(`/api/users/${user}/transaction`, body, config())
        .then(res => {
            dispatch({
                type: ADD_TRANSACTION,
                payload: res.data.data,
            })
        })
        .catch(error => {
            console.log(error.response);
        })

}

export const get_transactions = (user) => (dispatch) => {

    axios.get(`/api/users/${user}/transactions`, config())
        .then(res => {
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data.data,
            })
        })
        .catch(error => {
            console.log(error.response.data);
        })
}


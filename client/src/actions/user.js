import axios from 'axios';

import {UPDATE_USER} from './index';
import {authHeader as config} from './index';


export const update_user = (update, user) => (dispatch) => {
    const body = JSON.stringify(update);
    axios.patch(`http://localhost:3001/api/users/${user}`,body, config())
    .then( res => {
        console.log(res);
        dispatch({
            type: UPDATE_USER,
            payload: res.data.data,
        })
    })
    .catch( error => {
        console.log(error)
        console.log(error.response.data);
    });
}
import axios from 'axios';

import { UPDATE_USER } from './index';
import { authHeader as config } from './index';


export const update_user = (update, user) => (dispatch) => {
    const body = JSON.stringify(update);
    axios.patch(`/api/users/${user}`, body, config())
        .then(res => {
            dispatch({
                type: UPDATE_USER,
                payload: res.data.data,
            })
        })
        .catch(error => {
            console.log(error.response);
        });
}
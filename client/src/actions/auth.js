/*AUTHENTICATION ACTIONS */

import axios from 'axios'; 
import { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR, UNAUTHENTICATED_SUCCESS, UNAUTHENTICATED_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR } from './index';

const config ={ 
    headers: {
    'Content-Type': 'application/json',
  }
};

export const signin = ({email , password}) => (dispatch) => {

    const body = JSON.stringify({email, password });

    axios.get('/api/users/signin',body,config)
    .then(res => {
        dispatch({ type: AUTHENTICATION_SUCCESS});

        //add users token to local storage for access 
        localStorage.setItem('token', res.token);

        //redirect to main page
        history.push('/portfolio',{user: res.id});
    })
    .catch(error => {
        dispatch({
            type: AUTHENTICATION_ERROR,
            payload: error.message,
        });
    })
}

export const signup = ({name, email, password}) => (dispatch) =>{

    const body = JSON.stringify({ name, email, password });

    axios.post('/api/users/signup',body, config)
    .then(res => {
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.message,
        })
    })
    .catch(err => {
        dispatch({
            type: SIGNUP_ERROR,
            payload: err.message,
        })
    })
}

export const signout = () => dispatch => {
    localStorage.clear();
    dispatch({type: UNAUTHENTICATED_SUCCESS });
    history.push('/');
}
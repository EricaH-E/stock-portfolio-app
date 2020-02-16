/*AUTHENTICATION ACTIONS */

import axios from 'axios'; 
import { AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR, UNAUTHENTICATED_SUCCESS, UNAUTHENTICATED_ERROR, SIGNUP_SUCCESS, SIGNUP_ERROR, USER} from './index';

const config ={ 
    headers: {
    'Content-Type': 'application/json',
  }
};

export const signin = ({email, password }, history) => (dispatch) => {
    const body = JSON.stringify({email, password });

    axios.post('http://localhost:3001/api/users/signin', body, config)
    .then(res => {
        console.log(res.data);
        dispatch({ type: AUTHENTICATION_SUCCESS});
        dispatch({
            type: USER,
            payload: res.data.user
        });

        //add users token to local storage for access 
        // localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', res.data.token );


        //redirect to main page
        history.push('/portfolio');
    })
    .catch(error => {
        console.log(error.response.data.message);
        dispatch({
            type: AUTHENTICATION_ERROR,
            payload: error.response.data.message,
        });
    })
}

export const signup = ({name, email, password}, history) => (dispatch) =>{

    const body = JSON.stringify({ name, email, password });

    axios.post('http://localhost:3001/api/users/signup',body, config)
    .then(res => {
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res,
        });

        history.push('/signin');
    })
    .catch(error => {
        dispatch({
            type: SIGNUP_ERROR,
            payload: error.response.data.message,
        })
    })
}

export const signout = (history) => dispatch => {
    window.localStorage.clear();
    dispatch({type: UNAUTHENTICATED_SUCCESS });
    history.push('/');
}
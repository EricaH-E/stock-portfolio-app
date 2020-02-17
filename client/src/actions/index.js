/*ACTION TYPES DEFINED HERE */

export const USER = 'USER';
export const UPDATE_USER = 'UPDATE_USER';

export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const UNAUTHENTICATED_SUCCESS = 'UNAUTHENTICATED_SUCCESS';
export const UNAUTHENTICATED_ERROR = 'UNAUTHENTICATED_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const GET_STOCKS = 'GET_STOCKS';
export const ADD_STOCK = 'ADD_STOCK';
export const UPDATE_STOCK = 'UPDATE_STOCK';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export const CHECKOUT = 'CHECKOUT';
export const CHECKOUT_ERROR = 'CHECKOUT_ERROR';
export const CLEAR_CART = 'CLEAR_CART';


export const authHeader = () => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (localStorage.getItem('user')) {
    config.headers['Authorization'] = localStorage.getItem('user');
  }

  return config;
};




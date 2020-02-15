import React from 'react';
import PropTypes from 'prop-types';


import CheckoutForm from './checkoutform';
import add_stock from '../../actions/stock';

class Checkout extends React.Component{
    constructor(props){
        super(props);

        this.state={
            ticker: '',
            quantity: 0
        }
    }

    /*event handlers  */
     handleTickerChange =(event) =>{
         this.setState({ticker: event.target.value});
     }

     handleQuantityChange =(event) =>{
        this.setState({quantity: event.target.value});
     }
     handleSubmit = () => {
         /* backend call here */
     }

    render (){
        return(
            <CheckoutForm 
            onSubmit={this.handleSubmit}
            onTickerChange={this.handleTickerChange}
            onQuantityChange={this.handleQuantityChange}
            />
        )
    }
}

Checkout.propTypes = {
    add_stock: PropTypes.func.isRequired,
}
export default Checkout; 
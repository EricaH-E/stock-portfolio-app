import React from 'react';
import {connect }from 'react-redux';
import PropTypes from 'prop-types';


import CheckoutForm from './checkoutform';
import {add_stock, update_stock } from '../../actions/stock';
import {update_user} from '../../actions/user';
import {add_transaction} from '../../actions/transaction';

class Checkout extends React.Component{
    constructor(props){
        super(props);

        this.state={
            ticker: '',
            shares: 0,
            cost: 0,
            message: null ,
        }
    }

    /*event handlers  */
     handleTickerChange =(event) =>{
         this.setState({ticker: event.target.value});
     }

     handleQuantityChange =(event) =>{
        this.setState({shares: event.target.value});

     }

     handleSubmit = (event) => {

        event.preventDefault();

        const {ticker, shares, cost} = this.state;
        const {user} = this.props;

        if( ticker !== ''  && shares > 0){
            if (user.balance >= cost * shares){
                const found = 
                this.props.stocks.find( tick => tick.ticker === ticker);

                const cart= {action: 'BUY', ticker: ticker, user: user.id};

                if(found){
                    const update = { 
                            ...cart,
                            shares: found.shares + Number(shares),
                            stock: found._id,
                        };
                    this.props.update_stock(update);
            }else{

                this.props.add_stock({...cart, shares});
            }
                this.props.update_user({balance: user.balance - (cost * shares)}, user.id); 
                this.props.add_transaction({...cart,shares, cost});
        }else{
                this.setState({message: 'Insufficient Funds'});
        }
    }
     }

    render (){
        return(
            <CheckoutForm 
            onSubmit={this.handleSubmit}
            onTickerChange={this.handleTickerChange}
            onQuantityChange={this.handleQuantityChange}
            message={this.state.message}
            cost={this.state.cost}
            />
        )
    }
}

Checkout.propTypes = {
    add_stock: PropTypes.func.isRequired,
    update_stock: PropTypes.func.isRequired,
    add_transaction: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    update_user: PropTypes.func.isRequired,
    authenticated: PropTypes.bool,
}

const mapStateToProps = (state) =>({
    user: state.user,
    authenticated: state.auth.authenticated,
    stocks: state.stocks,
})

const mapDispatchToProps = {
 add_stock, 
 add_transaction,
 update_stock,
 update_user,
};


export default connect(mapStateToProps,mapDispatchToProps)(Checkout); 
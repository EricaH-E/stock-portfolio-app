import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 


import Stock from './stock';
import Checkout from '../checkout/checkout';
import {get_stocks} from '../../actions/stock';

import '../../styles/portfolio.css';


class Portfolio extends React.Component{

    componentDidMount(){
        const {user} = this.props;
        
        this.props.get_stocks(user.id);
    }

    renderUserWelcome(){
        const {name} = this.props.user; 
        return(
            <div>
                <h3>{name}'s Portfolio</h3>
            </div>
        )
    }

    renderUserBalance() {
        const {balance} = this.props.user;
        return(
            <div>
                <h5>Balance: {balance}</h5>
            </div>
        )

    }

    stocksView(){
        const stocks = this.props.stocks.map( p =>{
            return(
              <Stock 
              id={p._id}
              ticker={p.ticker}
              shares={p.shares}
              price={p.price}
             />
            )
          });

        return(
            <div>
                <table id="table"> 
                    <tbody> 
                        {stocks} 
                    </tbody> 
                </table> 
            </div>
        )
    }

    noStocksView(){
       return(
        <div>
          <p>No stocks to display</p>
       </div>
      )
    }

    render(){
        return(

            <div>
                <div className="split left">
                    {this.renderUserWelcome()}
                    {this.renderUserBalance()}
                    <div className="centered">
                        {this.props.stocks.length === 0 ?  this.noStocksView() : this.stocksView() }
                    </div>
                </div>
                <div className="split right">
                    <div className="centered">
                        <Checkout />
                    </div>
                </div>
            </div>
        )
    }
}

Portfolio.propTypes = {
    get_stocks: PropTypes.func.isRequired,
    stocks: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) =>({
        stocks: state.stocks,
        user: state.user,
    }); 

const mapDispatchToProps ={
    get_stocks
}


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio); 
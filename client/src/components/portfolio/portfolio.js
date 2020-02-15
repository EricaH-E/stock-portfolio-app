import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 


import Stock from './stock';
import Checkout from '../checkout/checkout';
import get_stocks from '../../actions/stock';

import '../../styles/portfolio.css';


class Portfolio extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            stocks : []
        }
    }

    componentDidMount(){
        /*get stocks from backend*/ 
    }

    getChangingStockValue = () => {
        /* get changing value */
    }

    stocksView(){
        const stocks = this.state.stocks.map( p =>{
            return(
              <Stock 
              ticker={p.ticker}
              shares={p.shares}
              price={p.price}
             />
            )
          });

        return(
            <div>
                <div className="split left">
                  <div className="centered">
                    <h3> Portfolio </h3>
                    <p>{stocks}</p>
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

    noStocksView(){
       return(
        <div>
            <div className="split left">
                <div className="centered">
                    <h3> Portfolio </h3>
                    <p>No stocks to display</p>
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

    render(){
        return(

            <div>
                 {this.state.stocks.length === 0 ?  this.noStocksView() : this.stocksView() }
            </div>
        )
    }
}

Portfolio.propTypes = {
    get_stocks: PropTypes.func.isRequired,
    stocks: PropTypes.array.isRequired, 
}

const mapStateToProps = (state) =>{
    return{
        stocks: state.stocks,
    }
}


export default connect(mapStateToProps)(Portfolio); 
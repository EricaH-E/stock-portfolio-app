import React from 'react';
import Portfolio from './portfolio';


class PortfolioContainer extends React.Component{
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

    render(){
        const portfolios = this.state.stocks.map( p =>{
            return(
              <Portfolio 
              ticker={p.ticker}
              shares={p.shares}
              price={p.price}
             />
            )
          });
        return(
            <div>
                <h3> Portfolio </h3>
                {this.state.stocks.length === 0 ?  <p> You dont own any stock shares yet</p>: {portfolios} }
            </div>
        )
    }
}

export default PortfolioContainer; 
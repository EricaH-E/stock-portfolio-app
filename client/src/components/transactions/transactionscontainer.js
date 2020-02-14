import React from 'react';

import Transactions from './transactions';


class TransactionContainer extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            transactions : []
        }
    }

    componentDidMount(){
        /*get transactions from backend*/ 
    }
    

    render(){
        const transactions = this.state.transactions.map( p =>{
            return(
              <Transactions
              ticker={p.ticker}
              shares={p.shares}
              price={p.price}
             />
            )
          });

        return(
            <div>
                <h3> Transactions </h3>
                {this.state.transactions.length === 0 ?  <p> You dont own any stock shares yet</p>: {transactions} }
            </div>
        )
    }
}

export default TransactionContainer; 
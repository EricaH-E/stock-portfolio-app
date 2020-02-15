import React from 'react';
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';

import Transactions from './transactions';
import get_transactions from '../../actions/transaction'; 



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

TransactionContainer.propTypes = {
    transactions: PropTypes.array.isRequired,
    get_transactions: PropTypes.func.isRequired,
}

  const mapStateToProps = (state) => {
       return {
           transactions: state.transactions,
        }
  }

export default connect(mapStateToProps)(TransactionContainer); 
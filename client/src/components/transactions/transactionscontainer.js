import React from 'react';
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';

import Transactions from './transactions';
import{ get_transactions }from '../../actions/transaction'; 

import '../../styles/portfolio.css';

class TransactionContainer extends React.Component{

    componentDidMount(){
        const {user} = this.props;
        this.props.get_transactions(user.id);
    }

    transactionsView(){
        const transactions = this.props.transactions.map( p =>{
            return(
              <Transactions 
              id={p._id}
              ticker={p.ticker}
              shares={p.shares}
              cost={p.cost}
             />
            )
          });

        return(
            <div>
                <table id="table"> 
                    <tbody> 
                        {transactions} 
                    </tbody> 
                </table> 
            </div>
            )
    }
 
    render(){

        return(
            <div>
                <h3> Transactions </h3>
                <div className="centered">
                     { this.props.transactions.length === 0 ? <p>No transactions to display</p> : this.transactionsView()}
               </div>
            </div>
        )
    }
}

TransactionContainer.propTypes = {
    transactions: PropTypes.array.isRequired,
    get_transactions: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

  const mapStateToProps = (state) => ({
           transactions: state.transactions,
           user: state.user,
    });

   const mapDispatchToProps ={
        get_transactions, 
   };


export default connect(mapStateToProps, mapDispatchToProps)(TransactionContainer); 
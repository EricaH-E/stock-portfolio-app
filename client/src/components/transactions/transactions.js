import React from 'react';
import PropTypes from 'prop-types';



class Transactions extends React.Component{
    render() {
       const {id, cost, ticker, shares} = this.props; 
        return(
            <tr key={id}> 
               <td>{ticker}</td> 
               <td>{shares}</td> 
               <td>{cost}</td> 
            </tr> 
        )
    }
}
Transactions.propTypes = {
    ticker: PropTypes.string,
    shares: PropTypes.number,
    price: PropTypes.number,
}
export default Transactions; 
import React from 'react';
import PropTypes from 'prop-types';



class Transactions extends React.Component{
    render() {
        return(
            <div> Portfolios go here</div>
        )
    }
}
Transactions.propTypes = {
    ticker: PropTypes.string,
    shares: PropTypes.number,
    price: PropTypes.number,
}
export default Transactions; 
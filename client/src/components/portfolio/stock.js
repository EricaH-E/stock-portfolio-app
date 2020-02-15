import React from 'react';
import PropTypes from 'prop-types';



class Stock extends React.Component{
    render() {
        return(
            <div> Portfolios go here</div>
        )
    }
}

Stock.propTypes = {
    ticker: PropTypes.string,
    shares: PropTypes.number,
    value: PropTypes.number,
}
export default Stock; 
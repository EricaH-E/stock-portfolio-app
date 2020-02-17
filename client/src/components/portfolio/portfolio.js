import React from 'react';
import PropTypes from 'prop-types';
import Stock from './stock';
import Checkout from '../checkout/checkout';

import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { get_stocks } from '../../actions/stock';
import { update_user } from '../../actions/user';

import '../../styles/portfolio.css';


class Portfolio extends React.Component {

    componentDidMount() {
        const { user } = this.props;

        this.props.get_stocks(user.id);

        const today = new Date();
        const update = { checkin: today };
        this.props.update_user(update, user.id);
    }


    stocksView() {
        const stocks = this.props.stocks.map(p => {
            return (
                <Stock
                    id={p._id}
                    ticker={p.ticker}
                    shares={p.shares}
                    price={p.latestPrice}
                />
            )
        });

        return (
            <div>
                <Table >
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Shares</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks}
                    </tbody>
                </Table>
            </div>
        )
    }

    noStocksView() {
        return (
            <div>
                <p>No stocks to display</p>
            </div>
        )
    }

    render() {
        return (
            <div>

                <div className="main" >
                    <div className="split left">
                        <div className="center">
                            <div >
                                {this.props.stocks.length === 0 ? this.noStocksView() : this.stocksView()}
                            </div>
                        </div>
                    </div>
                    <div className="split right" >
                        <div className="centered">
                            <Checkout />
                        </div>
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
    update_user: PropTypes.func,
}

const mapStateToProps = (state) => ({
    stocks: state.stocks,
    user: state.user,
});

const mapDispatchToProps = {
    get_stocks,
    update_user
}


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio); 
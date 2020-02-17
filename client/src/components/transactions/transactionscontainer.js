import React from 'react';
import PropTypes from 'prop-types';
import Transactions from './transactions';

import { Table } from 'reactstrap'
import { connect } from 'react-redux';
import { get_transactions } from '../../actions/transaction';

import '../../styles/transactions.css';

class TransactionContainer extends React.Component {

    componentDidMount() {
        const { user } = this.props;
        this.props.get_transactions(user.id);
    }

    transactionsView() {
        const transactions = this.props.transactions.map(p => {
            return (
                <Transactions
                    id={p._id}
                    ticker={p.ticker}
                    shares={p.shares}
                    cost={p.cost}
                    type={p.action}
                />
            )
        });

        return (
            <div >
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Ticker</th>
                            <th>Shares</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="body">
                        {transactions}
                    </tbody>
                </Table>
            </div>
        )
    }

    render() {

        return (
            <div>
                <h3> Transactions </h3>
                <div >
                    {this.props.transactions.length === 0 ? <p>No transactions to display</p> : this.transactionsView()}
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

const mapDispatchToProps = {
    get_transactions,
};


export default connect(mapStateToProps, mapDispatchToProps)(TransactionContainer); 
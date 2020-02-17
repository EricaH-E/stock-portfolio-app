import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CheckoutForm from './checkoutform';
import { add_stock, update_stock } from '../../actions/stock';
import { update_user } from '../../actions/user';
import { add_transaction } from '../../actions/transaction';
import { checkout, clear_cart } from '../../actions/cart';

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ticker: '',
            shares: 0,
            cost: 0,
        }
    }

    /*event handlers  */
    handleTickerChange = (event) => {
        this.setState({ ticker: event.target.value.toUpperCase() });
    }

    handleQuantityChange = (event) => {
        this.setState({ shares: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { ticker, shares } = this.state;

        if (shares > 0 && ticker.length > 0) {
            this.props.checkout({ ticker, shares });
        }


    }



    componentDidUpdate(prevProps) {
        if (prevProps.cart !== this.props.cart) {
            const { ticker, shares, cost, latestPrice } = this.props.cart;
            const { user } = this.props;

            if (user.balance >= cost && ticker && shares && cost && latestPrice) {
                const found =
                    this.props.stocks.find(tick => tick.ticker === ticker);

                const cart = { action: 'BUY', ticker: ticker, user: user.id };

                if (found) {
                    const update = {
                        shares: found.shares + Number(shares),
                    };
                    this.props.update_stock({ stock: found._id, user: user.id }, update);
                } else {
                    this.props.add_stock({ ...cart, shares, latestPrice });
                }
                this.props.update_user({ balance: user.balance - cost }, user.id);
                this.props.add_transaction({ ...cart, shares, cost });
                this.props.clear_cart();
            }
        }
    }


    render() {
        return (
            <CheckoutForm
                onSubmit={this.handleSubmit}
                onTickerChange={this.handleTickerChange}
                onQuantityChange={this.handleQuantityChange}
                message={this.props.cart.error}
                cost={this.state.cost}
            />
        )
    }
}

Checkout.propTypes = {
    add_stock: PropTypes.func.isRequired,
    update_stock: PropTypes.func.isRequired,
    add_transaction: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    update_user: PropTypes.func.isRequired,
    authenticated: PropTypes.bool,
    checkout: PropTypes.func.isRequired,
    clear_cart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user,
    authenticated: state.auth.authenticated,
    stocks: state.stocks,
    cart: state.cart,
})

const mapDispatchToProps = {
    add_stock,
    add_transaction,
    update_stock,
    update_user,
    checkout,
    clear_cart,
};


export default connect(mapStateToProps, mapDispatchToProps)(Checkout); 
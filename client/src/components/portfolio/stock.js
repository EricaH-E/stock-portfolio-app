import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { update_stock } from "../../actions/stock";


class Stock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changed: false,
            color: 'grey',
            price: 0,
        }
    }

    getCurrentPrice = () => {
        const { ticker, price, user, id } = this.props;
        this.setState({ changed: !this.state.changed });
        const URL_BASE = 'https://cloud.iexapis.com/v1/stock/';
        const URL_QUERY = '/batch?types=quote&token=';

        axios.get(`${URL_BASE}${ticker}${URL_QUERY}${process.env.REACT_APP_API_KEY}`)
            .then(res => {

                const { latestPrice } = res.data.quote;
                const update = { latestPrice };

                if (latestPrice !== price) {
                    this.props.update_stock({ stock: id, user: user.id }, update);
                }

            })
            .catch(error => {
                console.log(error)
            })


    }

    componentDidMount() {
        this.interval = setInterval(this.getCurrentPrice, 5000);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.price !== this.props.price) {
            if (prevProps.price > this.props.price) {
                this.setState({ color: 'red' });
            } else {
                this.setState({ color: 'green' });
            }
        }
    }

    render() {
        const { id, ticker, shares, price } = this.props;
        const col = { color: this.state.color }
        return (
            <tr key={id} style={col}>
                <td>{ticker}</td>
                <td>{shares}</td>
                <td>{(price * shares).toFixed(2)}</td>
            </tr>
        )
    }
}

Stock.propTypes = {
    ticker: PropTypes.string,
    shares: PropTypes.number,
    value: PropTypes.number,
    user: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user,

});

const mapDispatchToProps = {
    update_stock
}
export default connect(mapStateToProps, mapDispatchToProps)(Stock); 
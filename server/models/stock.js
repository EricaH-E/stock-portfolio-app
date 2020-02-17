/* Stocks Model */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    ticker: {
        type: String,
        required: true,

    },
    shares: {
        type: Number,
        required: true,
    },
    latestPrice: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = Stock = mongoose.model('Stock', StockSchema);
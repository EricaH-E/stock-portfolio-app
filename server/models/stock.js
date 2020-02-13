/* Stocks Model */

const mongoose = require('mongoose');
const  Schema = mongoose.Schema; 

const StockSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ticker: {
        type: String,
        required: true,
       
    },
    shares: {
        type: Number,
        required: true, 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

module.exports = Stock = mongoose.model('stock', StockSchema);
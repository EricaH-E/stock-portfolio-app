/* users transaction history */ 

const mongoose = require('mongoose');
const  Schema = mongoose.Schema; 

const TransactionSchema = new Schema({
    action: {
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
    date:{
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
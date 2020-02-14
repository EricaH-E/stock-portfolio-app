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
    price:{
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema);
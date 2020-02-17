/*User Model */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 5000.00,

    },
    checkin: {
        type: Date,
        default: Date.now(),
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
    }],
    portfolio: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock',
    }],
});

module.exports = User = mongoose.model('User', UserSchema);

/*User Model */

const mongoose = require('mongoose');
const  Schema = mongoose.Schema; 

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
});

module.exports = User = mongoose.model('user', UserSchema);

/* Index file for api routes*/
const express = require('express');
const router = express.Router();

const Users = require('../controllers/user.js');
const Stocks = require('../controllers/stocks');
const Transactions = require('../controllers/transactions');
const passport = require('passport');


require('../services/passport')(passport);

const authentication = passport.authenticate('jwt', { session: false });


//default api enpoint 
// app.get('/api', (req, res) => res.status(200).send({
//     'message': 'Welcome to the Stock API',
// }));

//creates a new users
router.post('/users/signup', Users.createUser);

//gets existing user
router.post('/users/signin', Users.signInUser);

//updates existing user
router.patch('/users/:user', authentication, Users.updateUser);

//user stock routes
router.post('/users/:user/stock', authentication, Stocks.addStock);
router.get('/users/:user/portfolio', authentication, Stocks.getPortfolio);
router.patch('/users/:user/stocks/:stock', authentication, Stocks.updateStock);

//transaction routes
router.post('/users/:user/transaction', authentication, Transactions.addTransaction);
router.get('/users/:user/transactions', authentication, Transactions.getTransaction);


module.exports = router;
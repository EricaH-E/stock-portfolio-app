/* Index file for api routes*/

const Users = require('../controllers/user.js'); 
const Stocks = require('../controllers/stocks');
const Transactions = require('../controllers/transactions');
const passport = require('passport');


require( '../services/passport')(passport);

const authentication = passport.authenticate('jwt' , {session :false});

const routes = (app) => {
    //default api enpoint 
    app.get('/api', (req, res) => res.status(200).send({
        'message': 'Welcome to the Stock API', 
    }));

     //creates a new users
    app.post('/api/users/signup', Users.createUser); 

    //gets existing user
    app.get('/api/users/signin', Users.signInUser); 

    //user stock routes
    app.post('/api/:user/stock',authentication, Stocks.addStock); 
    app.get('/api/:user/portfolio', authentication,Stocks.getPortfolio);
    app.patch('/api/stocks/:stock',authentication, Stocks.updateStock);

    //transaction routes
    app.post('/api/:user/transaction',authentication,Transactions.addTransaction);
    app.get('/api/:user/transactions',authentication, Transactions.getTransaction);


}

module.exports = routes; 
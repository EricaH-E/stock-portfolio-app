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
    app.post('/api/users/signin', Users.signInUser);

    //updates existing user
    app.patch('/api/users/:user',authentication, Users.updateUser);

    //user stock routes
    app.post('/api/users/:user/stock',authentication, Stocks.addStock); 
    app.get('/api/users/:user/portfolio', authentication,Stocks.getPortfolio);
    app.patch('/api/users/:user/stocks/:stock',authentication, Stocks.updateStock);

    //transaction routes
    app.post('/api/users/:user/transaction',authentication,Transactions.addTransaction);
    app.get('/api/users/:user/transactions',authentication, Transactions.getTransaction);


}

module.exports = routes; 
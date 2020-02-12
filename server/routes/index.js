/* Index file for api routes*/

const Users = require('../controllers/user.js'); 


const routes = (app) => {
    //default api enpoint 
    app.get('/api', (req, res) => res.status(200).send({
        'message': 'Welcome to the Stock API', 
    }));

    //creates a new users
    app.post('/api/users/signup', Users.createUser); 

    //gets existing user
    app.get('/api/users/signin', Users.signInUser); 
}

module.exports = routes; 
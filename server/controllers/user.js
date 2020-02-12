/* create and authenticate users */

const User = require('../models/user'); 

class Users {
    /* adds new users
        should encrypt password
        should return error if duplicate email
     */
    static createUser(req,res){
        console.log(req.body);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        user.save()
        .then(u => res.status(200).json(u))
        .catch(err => res.status(409).json({
            error : `Conflict: User with email ${req.body.email} already exist`, 
        }))

    }

    /*
    should authenticate user
    valid email and password should be found
    if not deny access
    */
    static signInUser(req, res){
        console.log(req.body);
        User.findOne({email: req.body.email, password: req.body.password})
        .then(u =>res.status(200).json(u)); 
        
    }
}

module.exports = Users; 
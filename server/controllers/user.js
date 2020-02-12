/* create and authenticate users */

const User = require('../models/user'); 

class Users {
    /* adds new users
        should encrypt password
        should return error if duplicate email
     */
    static createUser(req,res){
        const {name , email, password} = req.body; 

        User.findOne({email})
        .then(user => {
            if(user) return res.status(409).json({
                message: `Conflict: User with email ${email} already exist`
            })

            const newUser = new User({
                name,
                email,
                password,
            });
            newUser.save()
            .then(u => res.status(200).json(u));
        }); 
    }

    /*
    should authenticate user
    valid email and password should be found
    if not deny access
    */
    static signInUser(req, res){
        const {email, password} = req.body; 
        User.findOne({email, password})
        .then(u =>res.status(200).json(u)); 
        
    }
}

module.exports = Users; 
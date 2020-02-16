/* create and authenticate users */

const User = require('../models/user'); 
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken'); 


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
                success: false,
                message: `Conflict: User with email ${email} already exist`,
            })

            bcrypt.hash(password, 12, (err, hash) =>{
                if(err){
                    return res.status(500).json({
                        success: false, 
                        message:'Error creating user',
                    })
                }

             const newUser = new User({
                    name,
                    email,
                    password: hash,
                });
                newUser.save()
                .then(u => res.status(200).json({
                    succes: true,
                    message: 'Credentials created successfully',
                }));

            }); 

        });
    }

    /*
    should authenticate user
    user shuld exist else error
    valid email and password should be found
    if not deny access
    */
    static signInUser(req, res){
        const {email, password} = req.body;

        User.findOne({email})
        .then(user => {
            console.log(user);
            if(!user){
                return res.status(401).json({
                    success:false, 
                    message: 'Authentication Failure: User not found', 
                })
            }
            
            //compares the equivalency of hashes 
            bcrypt.compare(password, user.password, (err, match)=>{
                if(err || !match ){
                    return res.status(401).json({
                        success: false, 
                        message:'Authentication Failure: Incorrect email or password',
                    });
                }
                //if a match create an authentication token for user 
                if(match){
                    const token = JWT.sign({email: user.email, id: user.id}, 
                        process.env.JWT_SECRET,{
                        expiresIn:  "1h" });

                    res.status(200).json({
                        token: 'Bearer'+' ' + token,
                        user: {id: user.id, name: user.name, balance: user.balance}
                    })

                }
            })
        }); 
        
    }

    static updateUser(req,res){
        const {user} = req.params;
        User.findByIdAndUpdate(user,req.body, {useFindAndModify: false, new: true})
        .then(update => {
            res.status(200).json({
            success: true,
            message:'User updated successfully',
            data: {id: update.id, name: update.name, balance: update.balance} , 
        })})
        .catch( err => res.status(500).json({
            success: false,
            message: 'Failed to update user',
        }))
    }
}

module.exports = Users; 
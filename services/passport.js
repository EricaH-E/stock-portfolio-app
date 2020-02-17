/* authentication middleware */

const JWT = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

const User = require('../models/user');

require('dotenv').config(); 


module.exports = (passport) =>{

    const options ={
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //decodes encrypted token
        secretOrKey: process.env.JWT_SECRET, //random string to help with encoding
        usernameField: 'email'
    };

    passport.use(new JwtStrategy(options, (payload, done)=>{ 

        const id = payload.id;
        
        User.findById(id)
        .then(user => {
            if(user === null) {
                 done(null,false);
            }
            else {
                done(null, user);
            }
        })
        .catch(error => {
            done(error, false);
        })
    }
    ));
};



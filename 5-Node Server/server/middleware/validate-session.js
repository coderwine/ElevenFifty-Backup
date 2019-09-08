let jwt = require('jsonwebtoken');
let sequelize = require('../db');
let User = sequelize.import('../models/user');

module.exports = function(req,res,next) {
    if(req.method == 'OPTIONS') {
        next()
    } else {
        let sessionToken = req.headers.authorization; //! 1
        console.log(sessionToken) //! 2
        if(!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' }); //! 3
        else { //! 4
        jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => { //! 5
            if(decoded){
                User.findOne({where: { id: decoded.id}}).then(user => { //! 6
                    req.user = user; //! 7
                    next();
                },
                function(){ //! 8
                    res.status(401).send({error: 'Not authorized'});
                });
            } else { //! 9 
                res.status(400).send({error: 'Not authorized'});
            }
        });
        }
    }
}

//! 1: Created to hold the Token.  Pulled from the authorization header.
//! 2:Token is printed to the console.  For debugging purposes
//! 3: If no token, present a 403 error
//! 4: user property is not checked so only tokens will get checked.  This prevents unauthorized use of a token that was assigned to a different user. 
//! 5: verify method decodes the token w/ the provided secret within the .env.
//! 6: If decoded has a value, the Sequelize "findOne" method looks for an ID in the Users table that matches the decoded.id property.
//! 7: callback set the user value for the reuest as the id value passed to it then sends the request on to its next destination.
//! 8: If no matchin id is found, an error msg is thrown.
//! 9: If no value for decoded, an error is thrown.
const jwt = require('jsonwebtoken');
const Animal = require('../db').import('../models/animal');

const validateSession = (req,res,next) => {
    if ( req.method =='OPTIONS') {
        next(); //allowing options as a method for a request.
    } else {
        let sessionToken = req.headers.authorization;
        if(!sessionToken){
            res.status(403).send({auth: false, message: 'No token'});
        } else {
            jwt.verify(sessionToken, 'Secret', (err, decoded) => {
                if(decoded) {
                    User.findOne({ where: {id:decoded.id } }).then(user => {
                        req.user = user;
                        next();
                    },
                    () => {
                        res.status(401).send({ error: "Not authorized"});
                    })
                } else {
                    res.status(400).send({ error: "Really not authorized."})
                }
            })
        }
    }
}


// const validateSession = (req,res,next) => {
//     if( req.method == 'OPTIONS') {
//         next(); //allowing options as a method for a request.
//     } else {
//         const token = req.headers.authorization;
//         jwt.verify(token, 'Super_Secret_Password', (err, decoded) => {
//         if(!err && decoded) {
//             Animal.findOne({
//                 where: {
//                     id: decoded.id
//                 }
//             },console.log(decoded))
//             .then(animal => {
//                 if(!animal) throw 'err'
//                 req.animal = animal
//                 return next();
//             })
//             .catch(err => next(err))
//         } else {
//             req.error = err
//             return res.status(500).send('Not Authorized')
//         }
//     })
// }
// }

module.exports = validateSession;
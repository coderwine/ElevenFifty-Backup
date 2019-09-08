let express = require('express');
let router = express.Router();
let sequelize = require('../db');

const validateSession = require('../middleware/validate-session');

/**********************************************
//! Node Challenge 2 - Unauthorized CRUD 
//! ( Sequelize, Express, CRUD )
**********************************************/
  
  //? SILVER
  router.post('/create', (req,res) => {

    const newAnimal = {
      let name = req.body.animal.name;
      let numberOfLegs =  req.body.animal.numberOfLegs;
      let predator = req.body.animal.predator;
      let userId = req.user.id;  // this point to the validate session.
    }
      

    Animal.create({
        name = name,
        numberOfLegs = numberOfLegs,
        predator = predator,
        userId = userId
    }).then(
        createSuccess = animal => {
            res.status(200).json(animal);
        },
        createFail = err => {
            res.status(500).json({error: err});
        }
        );
    });

    router.get('/', (req,res) => {
        Animal.findAll()
        .then(animals => res.status(200).json(animals))
        .catch(err => res.status(500).json({error:err}))
    })
    

    router.delete('/delete/:id', (res,req) => {

        Animal.destroy({
            where: { 
                id: req.params.id, 
                userId: req.user.id 
            }
        }).then(
            deleteSuccess = recChange => {
                res.status(200).json({message: `${recChange} record(s) changed.`});
            },
            deleteFail = err => {
                res.status(500).json({message: 'Failed to delete', error:err});
            }
        );
    });

router.put('/update/:id', (req,res) => {
    Animal.update(req.body.animal, {
         where: { name: req.params.animal.id }})
        .then(name => res.status(200).json(animal))
        .catch(err => res.status(500).json(req.errors))
})

module.exports = router;
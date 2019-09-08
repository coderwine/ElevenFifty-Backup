//!This part should be built within the app.js file.

let express = require('express');
let app = express();
let user = require('./controller/user-controller');
let animal = require('./controllers/animal-controller');
let sequelize = require('./db');
let bodyParser = require('body-parser')

app.use('/animal')


/**********************************************
//! Node Challenge 2 - Unauthorized CRUD 
//! ( Sequelize, Express, CRUD )
**********************************************/
/*
  //* BRONZE CHALLENGE:
  Make a new '/create' endpoint in the animal-controller file.  It should save all the data
  from the animal model to the database, including //? # of legs, boolean predator value, and its name.
  If the animal is correctly saved in the database, inform the user.  Otherwise, alert the user if 
  there's an error.
  Make another '/' endpoint that will return all the animals created in the database. Like the others, send appropriate statuses based on if the request succeeds or not.  */
  
  //? SILVER
  router.post('/create', (req,res) => {
      let animalName = req.body.animal.name;
      let numLegs =  req.body.animal.numberOfLegs;
      let predator = req.body.animal.predator;
      

    Animal.create({
        name = animalName,
        numlegs = numLegs,
        predator = predator
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
    
    /*
      //* SILVER CHALLENGE:
      Complete the bronze challenge, then make a new '/delete' endpoint that will delete an animal from
      the database.  However you complete this challenge, a request must be able to specify which animal
      needs to be deleted.  If the delete was successful, inform the user, otherwise alert the user to 
      an error.*/

    router.delete('/delete/:id', (res,req) => {
        let data = req.params.animal.name;
        let userid = req.params.animal.id;

        Animal.destroy({
            where: { name: data, owner: userid }
        }).then(
            deleteSuccess = recChange => {
                res.status(200).json({message: `${recChange} record was deleted.`});
            },
            deleteFail = err => {
                res.status(500).json({message: 'Failed to delete', error:err});
            }
        );
    });

      /*
      //* GOLD CHALLENGE:
      Complete the silver challenge, but make a new '/update' endpoint that will let a request update
      animal data in the database.  Like with the silver challenge, the request must be able to specify
      which animal needs to be updated.  On success, inform the user, on failure, alert appropriately.
    */

router.put('/update/:id', (req,res) => {
    Animal.update(req.body.animal, {
         where: { name: req.params.animal.id }})
        .then(name => res.status(200).json(animal))
        .catch(err => res.status(500).json(req.errors))
})

module.exports = router;
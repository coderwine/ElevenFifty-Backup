let express = require('express') //1
let router = express.Router()  //2
let sequelize = require('../db');
let TestModel = sequelize.import('../models/test');  //import test model and store it in "TestModel" varibale.  It's convention to use Pascal casing (uppercase both words) for model class w/ Sequelize.

/**************************************
 * Controller Method #1: Simple Response
************************************* */

router.post('/one', function(req, res){

  res.send("Got a post request!")
});

/**************************************
 * Controller Method #2: Persisting Data
************************************* */

router.post('/two', function (req, res){
  let testData = "Test data for endpoint two";  //going to have a fixed string that will use every time a POST request comes in.

  TestModel  //variable to access the momdel that we are using.  Grants access to "test" model prop and to Sequelize methods.
    .create({  //a Sequelize method that allows us to create an instance of the Test model and send it off to db, as long as the data types match the model.
      //"testdata" is the key in the object.  Represents the column being used in the table.
       testdata: testData  //pass the value of "testData" down to satisfy key/value pair for model.  
    }).then(dataFromDatabase => {
      res.send('Test two went through!')
    })
});

/**************************************
 * Controller Method #3: req.body
************************************* */

router.post('/three', function (req, res) {
  let testData = req.body.testdata.item;

  TestModel.create({
    testdata: testData
  })
  res.send('Test three went through!')
  console.log('Test three went through!')
});

//STEP 4 - use this with Postman
router.post('/four', function (req, res){
  var testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData
  }).then(  //call this method.  Because it returns a Promise, this forces the message to wait for the insert statement to finish.
    function message() {  //the callback function will console once the testData is done running.
      res.send("Test 4 went through");
    }
  )
})

/**************************************
 * Route 5: Return data in a Promise
************************************* */

router.post('/five', function(req, res){
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData
  }).then(
    function message(data) {
      res.send(data);
    }
  );
});

/**************************************
 * Route 6: Return response as JSON
************************************* */

router.post('/six', function(req,res){
  let testData = req.body.testdata.item;
  TestModel.create({testdata: testData}).then(function message(testdata){res.json({testdata:testdata});
  });
});

/**************************************
 * Route 7: Handle Errors
************************************* */

router.post('/seven', function(req,res){
  let testData = req.body.testdata.item;

  TestModel.create({
    testdata: testData
  }).then(
    function createSuccess(testdata) {
      res.json({
        testdata: testdata
      });

    }, function createError(err){
      res.send(500, err.message);
    }
  );
});

/**************************************
 * GET: Get simple message from Server
************************************* */

router.get('/helloclient', (req,res)=>{
  res.send('This is a message from the server to the client.')
})

/************************
 * GET:  /one
 ***********************/
router.get('/one', function(req,res) {

  TestModel.findAll({
    attributes: ['id','testdata']
  })
  .then(
    function findAllSuccess(data) {
      console.log('Controller data:', data);
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});

//9
module.exports = router;  //if the below code was uncommented, this export would need to be at the bottom.

// //3    //4   //5          //6
// router.get('/', function (req, res) {
//     //7           //8 
//   res.send('Hey!!! This is a test route!');
// });

// router.get('/about', function (req, res) {
//   res.send('Hey, in an about route way...')
// });

// router.get('/contact', function(req, res) {  //10
//   res.send({user: 'kenn', email: 'kenn@beastmode.com'});
// });

// router.get('/projects', function(req, res) {  //11
//   res.send(['Project 1', 'Project 2']);
// });

// router.get('/mycontacts', function(req,res) {  //12
//   res.send([
//     {user: 'kenn', email: 'kenn@beastmode.com'},
//     {user: 'aaron', email: 'aaron@beastmode.com'},
//     {user: 'quincy', email: 'kenn@beastmode.com'},
//     {user: 'tom', email: 'tom@beastmode.com'},
//   ]);
// });

//! ///////////////////////////////////////////////////////////////////////////////////////////////////

// 1: We import the Express framework and it inside the variable express. This instance becomes our gateway to using Express methods.

// 2: We create a new variable called router. Since the express variable(line 1) gives us access into the express framework, we can access express properties and methods by calling express + .. Therefore, when we call express.Router(), we are using the express variable to access the Router() method.
// 3: The Router() method will return a router object for us. You can read about it more at the Express docs (Links to an external site.).

// 4: We use the router object by using the router variable to get access into the Router() object methods.

// 5: get() is one of the methods in the object, and we call it here. This method allows us to complete an HTTP GET request. We pass two arguments into the .get method.

// 6: The first argument is the path. In this case, the path is just a /. More on this later.

// 7: The second argument is a callback function. This is also sometimes called a “handler function”. This function gets called when the application receives a request to the specified route and HTTP method. The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

// 8: Inside our callback function, we call res.send(). send() is an express method that can be called on the res or response object. Our response parameter is just a simple string.

// 9: We export the module for usage outside of the file.

// 10: Pass in an object.

// 11: Pass in an array.

// 12: Pass in an array of objects.

//

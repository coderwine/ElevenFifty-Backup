require('dotenv').config();

let express = require('express'); //1
let app = express(); //2
let test = require('./controllers/testcontroller')//6
let user = require('./controllers/usercontroller') //import the userconcontroller.js
let sequelize = require('./db');  //10
var authTest = require('./controllers/authtestcontroller');


app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use(express.json());

app.use(require('./middleware/headers'))  //activated our headers.  This should always come before the routes are declared.
//7            //8
app.use('/test', test);

app.use('/api/user', user);  //set up a route to the endpoints for the api/user route.

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);
//3         //4
app.listen(3000, function(){
    console.log('Powerman 3000 isn\'t as good as you remembered.  Also, it\'s the port you\'re on.  3000, not Powerman...') //5
});

// 1: Here we require the use of the express npm package that we've installed in our dependencies.

// 2: We create an instance of express. We're actually firing off a top-level express() function, a function exported by the Express module. This allows us to create an Express app.

// 3: app.listen will use express to start a UNIX socket and listen for connections on the given path. This method is identical to Node’s http.Server.listen().

// 4: The given path is localhost:3000.

// 5: We call a callback function when the connection happens with a simple console.log.

// 6: We import the route object that we just created and store it in a variable called test.

// 7: We call app.use and in the first parameter create a base url called /test. So our base url will look like this:   http://localhost:3000/test

// 9: For our second parameter for the use() function, we pass in test. This means that all routes created in the testcontroller.js file will be sub-routes. It will look like this:  http://localhost:3000/test or http://localhost:3000/test/

// 10: Created a sequelize variable that imports the db file.onTable

// 11: use the variable and call ".sync()".  This will ensure that all we sync all defineed models to the DB.
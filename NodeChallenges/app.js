let express = require('express');
let app = express();
let user = require('./controllers/user-controller');
let animal = require('./controllers/animal-controller');
let sequelize = require('../db');
let bodyParser = require('body-parser')

// sequelize.sync();
sequelize.sync({force: true});  //'force: true' will update a new table if the model changes. 

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use('/user', user);

app.use(require('./middleware/validate-session'));
app.use('/animal', animal);

app.listen(3000, function (){
    console.log('App is listening on port 3000');
})
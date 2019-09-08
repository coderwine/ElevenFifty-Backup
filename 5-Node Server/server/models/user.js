module.exports = function (sequelize, DataTypes) {
          //1        //2
    return sequelize.define('user', {
        username: DataTypes.STRING,  //3
        passwordhash: DataTypes.STRING  //3
    });
};

//? 1:  A cuntion wth a Sequelize obeject that calls the define method.
//? 2:  A first parameter that will creat a user table in Postgres.
//? 3:  An object with username and passwordhas that will be columns in the table.
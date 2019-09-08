//Objects!
//  and Object Oriented Programming (OOP).
//  Objects are a data type that let us store a collection of properties and methods.

   //1          //2
var bobAlcorn = {
    //3                     //4
    name                : "Bob Alcorn",
    age                 : 59,
    vocation            : "Chief Operating Officer",
    isRetired           : false                               
};
/*
1.  Created using "var".
2.  Wrapped in curly braces.
3.  "name", "age", "vocation", and "isRetired" are properties of the object.
4.  Values of each property (following the colon)
*/

//Dot Notation:  "." is an operator, like a plus symbol.  It accessing within the object.  
console.log(bobAlcorn); //1  - Prints the whole thing.
console.log(bobAlcorn.name);  //2  - Prints just the name.
console.log(bobAlcorn.age);  //3  - Prints just the age.

//Undefined.  When we attempt to access a property that doesn't exist.
console.log(bobAlcorn.middleName);  //this property doesn't exist thus comes up on the console as "undefined".

//Practice:
console.log(bobAlcorn.name);
console.log(bobAlcorn.age);

var literalPlayer = {
    userName: "Stephan",
    power: 9000,
    toughness: "flabby",
};

console.log(literalPlayer.userName);
console.log(literalPlayer.power);
console.log(literalPlayer.toughness);

//MORE PRACTICE!

var friendZack = {
    name: "The Zack-a-nator",
    realName: "That's really it...",
    age: 37,
    superPower: "Counting by 3s",
};

var theWife = {
    name: "Anna",
    realName: "Wife-Lady",
    age: "Immortal",
    superPower: "Yawning",
}

var theKiddo = {
    name: "Lilly",
    realName: "Lil'Spit",
    age: 6,
    superPower: "Debating the existence of time and how it aligns with Bed Time.",
};

console.log(friendZack.name,theWife.name,theKiddo.name);
console.log(friendZack.realName, friendZack.superPower);
console.log(theWife.superPower);
console.log(theKiddo.name, theKiddo.superPower);

console.log('Hello World!');
var hiWorld = 'Hellow Wolrd!';
console.log(hiWorld);

var splitWorld = {
    first: "Hello ",
    last: "World!",
};
console.log(splitWorld.first,splitWorld.last);

function helloWorld(a,b){
    let First = a;
    let Last = b;
    let combined = a + b;
    console.log(combined); 
}
helloWorld("Hello ", "World Again!!"); 
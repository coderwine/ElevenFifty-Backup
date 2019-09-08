class User {  //* name the class
    //*call the constructor function and create parameters.  These will be values that we want to be passed in and stored in the object
    constructor(first, last, e) {
        //*On the right side fo these expressions, the word 'first', 'last', and 'e' below, we have the value that is getting passed into the parens when the object is created. 
        this.f = first;
        this.l = last;
        this.email = e;
        //* ^^^
        //*On the right side, we have the actual properties of the object.  The left side stores the incoming value from the right as the property for 'this' specific object being created. 
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);  //undefined
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

//////////////////////////////
class Char {
    constructor(name, race, job) {
        this.name = name;
        this.race = race;
        this.class = job;
    }
}

let charOne = new Char("Bilbo", "Hobbit", "Thief");
console.log(charOne.name);
console.log(charOne.class);
console.log(charOne);
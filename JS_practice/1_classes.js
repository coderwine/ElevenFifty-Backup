//* ES6 JS Classes

class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //? Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //? Method 2
    status(){
        console.log('Current status: '+this.type);
    }
}

//? Instance of the class/new object
let anonDude = new User('Anonymous dude');

//? we can now use the instance and the . operator
//? to access the 2 methods
anonDude.greet();
anonDude.status();

//? Another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

let eric = new User('Eric');
eric.greet();

let anna = new User('Anna');
anna.greet();
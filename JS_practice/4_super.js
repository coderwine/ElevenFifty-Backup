class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    //Method 1
    greet() {
        console.log('Welcome back,' + this.name);
    }
    //Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
}

//Instance of the class/new object
let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//* Super
class BronzeLevelUser extends User {
    //We add the ccinfo property to the user here.  
    constructor(username, password, ccinfo) {
        //*using 'this' in your constructor, you must have super that points to the parent constructor.
        super(username, password);
        //* The 'this' won't work without super.
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.username, this.password, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze123", "42424242424224");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
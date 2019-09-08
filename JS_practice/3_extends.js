class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User"
    }

    greet(){
        console.log('Welcome back, ' + this.name);
    }
    status(){
        console.log('Current status: '+this.type);
    }
}

class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' +this.name+'.'+ ' Would you like to join our program?');
    }
}

//* Instance of User Class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//* Instance of TrialUser Class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends TrialUser {
    userBanned(){
        console.log(`What are you thinking, `+this.name + `  Trial is up...`);
    }
}

let nonUser = new BannedUser('Steve');
nonUser.greet();
nonUser.trialEnding();
nonUser.status();
nonUser.userBanned();

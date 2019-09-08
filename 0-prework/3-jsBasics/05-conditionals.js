// Conditionals have the power to alter the state of an application based on certain conditions being met or unment, true or untrue.

//1
var isOn = true;

//2     //3
if (isOn === true) {
    console.log("The Light is on."); //4
}

/*
1. Decalred a var and initialized that it was true.
2. used the "if" keyword to check a condition.
3. the condition is set for "isOn" to strictly equal "true".
4. If value of "isOn" equals (===) "true", then it will execute console statement ("The Light is on.").
*/

var isOn = true;
    //1
if(isOn) {
    console.log("The light is on.  It's bright!");
}

/*
1.  This is a shorthand version of the above statement.  The if statement simply is checkign the condition to see if it is "true".
*/

//Practice:  Write a conditional that check to see if the weather is greater than 70.  If is is, we want to print "Wear shorts today!  It's going to be hot!".

var weather = 75;

if(weather > 70) {
    console.log("Wear shorts today!  It's going to be hot!");
}

//Practice AGAIN!:  write statements that involve concepts from everyday life.  Keep it simple.

var lillyHome = 3;
var forDinner = "burritos";
var gameScore = 25;

if(lillyHome >= 2) {
    console.log("Welcome Home Lilly!");
}
if(forDinner = "burritos") {
    console.log("Yum! Was hoping for these!");
}

if(gameScore >= 21) {
    console.log("The Game is Won!");
};
//Functions allow us to execute some action, and they are able to be used in a repeated fashion.

//an example of a "declaration" of a function:

//1         //2
function hello() {
    //3
    console.log("Hello World");
}
/*
1. the Function keyword.  This notes the function to call.
2. Name of function.  "Hello"
3. Excute function when it is called.
*/

//Calls.  
//  When we "call" a function, that means we're going to use it.  
hello();

//the fuction can be called a number of times:
hello();
hello();

//Practice:
function pacersWon() {
    console.log("Pacers Won!");
}
pacersWon();
pacersWon();

//Parameters and Arguments:
/*  Parameters are the names listed in the function definition.
    Arguments are the real values received by the function when you called it. */

//a function w/ a parameter.
/*
funtion numberEntered(x) {
    console.log("The number you entered was: ", x);
}  

numberEntered(5);
*/  //this cuntion doesn't seem to be working...

function addAnyTwoNumbers(x, y) {
    console.log(x + y);
}

addAnyTwoNumbers(4,5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

/*Reps
Write a funtion that subtracts two numbers
Call the function subtractTwoNumbers
Should have 2 params, firstNum and secondNum.
Print the diff of the firstNum that is subtracted from secondNum to console.
Call function once, with arguments of 5 and 7
*/

/* Unsure as to why this code doesn't work.  Needs to find out why.
function subtractTwoNumbers(firstNum, secondNum) {
    console.log(subtractTwoNumbers(secondNum - firstNum));
}

subtractTwoNumbers(5,7);
*/

//Return
/* 
When JS reaches a return, it stops executing the function.  The return is the value that the function spits out.
 */

//Declare the function:
console.log("start");
// This code isn't working either when I output it to the console.
function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z) {
    let myInc = a * x;
    let myTaxes = myInc - y;
    let totalExp = myTaxes + z;
    //return totalExp;
    console.log(totalExp);
}

getMyTaxReturnAndDoMyTaxesAndStuff(100000, 5, 50000, 0);

console.log("end");
//Answer this Job Interview type Question:
//Explain how the "return" keyword works in a funciton:
    // Return executes the values of the function to provide that information.

//Practice:
/*
- Write a function that returns the value of two numbers added together.
- Write a function that takes in a first and last name.  It returns a whole name.
- Write a function that returns your pet's name and breed.
*/


function twoNums(x, y){
    console.log(x + y);
}

twoNums(10,20);

function fullName(a, b){
    let firstName = a;
    let lastName = b;
    let total = a + b;
    console.log(total);
}

fullName("Eric", "Winebrenner");  //WOOT!


function fullName(first, last) {
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Eric", "Winebrenner");

function thisPet(name, type) {
    var thisAnimal = name + " " + type;
    console.log(thisAnimal);
    return thisAnimal;
}

thisPet("Gonzo", "the Mad-Hatter");

//Write a function that calculates teh totalprice after tax on any quantity of any price on a product.

function totalPrice(a) {
    var priceTag = a;
    var stateTax = a * .07;
    let actPrice =  priceTag + stateTax;
    console.log(actPrice);
}

totalPrice(10);
// Strings are groups of characters "strung" (concatenated/added) together.
//  Strings MUST go in quotes.

console.log("I was born in Indianapolis.");
console.log("I've lived in three states."); //for me... 4
console.log("I like Indiana the best."); //meh - TN for me.
console.log("My bank account had two million bucks in it.  It's gone now."); //but shall return...

//like integers, var keywords (const or let) needs to hold the value in a container.  Examples:
var tweet = "Lebron is king!  Westbrook for president!";
var facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
var username = 'jamespauloconnor';

//Numbers within a string are considered as simple text.
var password = '123456789HELLO';
var birthDay = "August 11";

//Concatenation happens when you bring two strings together.
var birthCity = "Indianapolis";
var birthState = "Indiana";

console.log(birthCity + ", " + birthState);

//with the "Quick Challenge", the above sample is exactly that.  Gonna change it up though.

var birthCityTwo = "Garland";
var birthStateTwo = "Texas";
var simpleStatement = "I lived here."

console.log(birthCityTwo +", "+birthStateTwo +".  "+simpleStatement);

//Stings and Numbers
var ageInAugust = 40;
var highSchool = "Bill Murray High School";
var graduateHighSchool = 1994;

console.log(highSchool + ", " + graduateHighSchool);
console.log("My age in August", ageInAugust);

//Another Challenge:  Write a string that has two var.  Output I graduated from Bill Murray High School in 1994.

var highSchool = "Bill Murray High School";
var gradYear = 1994;
console.log("I graduated from "+ highSchool +" in " + gradYear);

//String Methods:
/* These allow us to introduce functions w/o needing to write them.  Utilizing the "." operator. */

//length - returns the length of a string (including spaces) 
console.log(highSchool.length);

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school
console.log(highSchool.split(" "));  //splits the string into an array on each space.
console.log(highSchool.slice(10)); //cuts off everything before the nth index (10 in this case)
console.log(highSchool.slice(5));
console.log(highSchool.slice(12));
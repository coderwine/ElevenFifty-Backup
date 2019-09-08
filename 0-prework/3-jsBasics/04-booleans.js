//Description:
/* Boolean values allow us to set a var to a true or false value.  
Often, in programming, we will need data type that can only have 1 of 2 values

ex:
YES / NO
ON / OFF
TRUE / FALSE

JavaScript has a Boolean data type that can only take the values of true or false. */

var isLoggedIn = true;
var isAuthenticated = true;
var hasLoggedInToday= false;
var hasToken = false;

/*  Booleans compare two values for EQUALITY, INEQUALITY, or DIFFERENCE:

==      Equality
===     Strict Equality
!=      Inequality
!==     Strict Inequality
>       Greater than
>=      Greater than or equal
<       Less than
<=      Less than or equal
*/

console.log(2>1); //true
console.log(3<2); //false

var test = 2 >= 3; //false
console.log(test);
console.log("Two is greater than one? " + (2 >1));
console.log(3 >= 1);

/* an important rule about "==" vs "==="
==  checks to see if the values are the same.  Not the type.
=== checks to see if the values and the equality are teh same.

2 == "2";       True        This checks for equality, not type.
1 == "1";       True        This checks for equality, not type.
2 === "2";      False       Equality is the same, but type is different.
2 === 2;        True        Equality and type are the same.
"Password12!!" === "Password12!!"       True        Equality and type are the same.        
*/

//What would the value for the folow three?

"Password12!" === "Password12!!"        //False
1 !== 2     //strict inequality so "true"
10 !== 10  //strict inequality so "false" because these are strict equalities.

//Logical Operators:
/* 
&&  the equivalent of "and"
|| means "or"
! (or bang) means "not" 

Consider:
&& stands for AND Example: 4 > 0 && -2 < 0  (both these are correct statements)
|| stands for OR Example: 4 > 0 || -2 > 0  (either one of these are correct statements)
! stands for NOT Example: !(posNum < 0) (0 is not a positive number)
*/

console.log("&& :", 2===2 && 1===1);  //true because: both values are strict equalities.
console.log("|| :", 2===2 || 2===1); //only one statement is a strict equality.
console.log("!=", 2 !=1); //2 is not equal to 1.

/*
Common Job Interview Question:
What is the difference between == and ===?
==  partial equalities / values are equal but not type.
=== strict equalities  / value and type are equal
*/
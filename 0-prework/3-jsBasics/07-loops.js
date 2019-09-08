/*
  Loops allow us to repeatedly run a block of code until a condition is met.

What if we wanted to print a range of numbers all the way to 100?
  */

for (var i = 1;  i < 11; i += 1){
    console.log(i)
}

//Syntax:  structure 

/*
for (setup; test expression; increment) {
    body;
}
*/
/*
//Another EX:
      //1        //2      //3
for (var i = 1; i <= 10; 1++){
    console.log("number:", i);
}
*/
/*

1.The starting point.  Counting from 1.
2. This is the conditional section.  Also considered as the condition to be met.  As long as "i" is under     10 or equal to 10, it keeps going.
3.  This is what it does when it keeps going.  "i++" is shorthand for say "add 1 to i".
*/

//Thoughts:
/*
 - This loop is going to start at 1.
 - It's going to check if "i" is less than 10.  It is 1 so... it is.
 - So it will execute i++ to add 1 to i.
 - Then, print i to console until it reaches 10.
 */

 //Practice!
 /*
 - Write a loop that counts to 50 by 5s.  Start at 0.
 - Write a loop that starts at 20 and counts down to 1.  Subtract 1 each time.
 - Write a for loop that starts at 3, and increments by 5, but doesn't go over 30.
 */

for (var i = 0; i <= 50; i += 5) {
    console.log("Number: ", i);
}

for (var i = 20; i >= 1; i -= 1){
    console.log("Count Down:", i);
}

for (var i = 3; i <= 30; i += 5){
    console.log("Until 30?:", i);
}

for (var i = 10; i>=0; i--){
    console.log("Do Over:", i);
}

//More Practice!
/* 10 loops!
- Count to 200s by 25, start at 25. **check
- Count to 10 by 2s.  Start at 6.
- Count down to 10 by 5s.  Start at 100.
- Write a loop that calls a function every time it iterates:
*/
console.log("PRACTICE 1");
for (var a = 25; a <= 200; a += 25) {
    console.log(a);
}

console.log("PRACTICE 2");
for (var b = 6; b <= 10; b += 2) {
    console.log(b);
}

console.log("PRACTICE 3");
for (var c = 100; c >= 10; c -=5){
    console.log(c);
}

console.log('PRACTICE 4');
function callOut(a,b){
    let cryOut = a + b;
    console.log(cryOut);
}

for (var i = 10; i >= 0; i--){
    console.log(i);
}
callOut("OH! ", "AH AH!!");

console.log('PRACTICE 5');
for (var i = 3; i<=3000; i *=10){
    console.log(i);
}

console.log('PRACTICE 6');
for (var i = 1564; i >= 40; i /=3){
    console.log(i);
}

console.log('PRACTICE 7');
for (var i = 20; i <= 20000; i *=5){
    console.log(i);
}

console.log('PRACTICE 8');
for (var i = 550; i >= 5; i /=2){
    console.log(i);
}

console.log('PRACTICE 9');
for (var i = 1000000; i >=100; i -= 5000){
    console.log(i);
}

console.log('PRACTICE 10');
for (var i = 5; i >= 0; i -= .25){
    console.log(i);
}
// /*
// WHITEBOARD 1 - FIZZ BUZZ (Conditionals Only)

// Challenge:

// Create a variable named FB that takes numbers
// Write a conditional that:
// Prints out "Fizz" if the number is divisible by 3
// Prints out "Buzz" if the number is divisible by 5
// Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
// */

// let age = 26;
// switch(true){
//   case (age >= 25):
//     console.log('Yay! You can rent a car!')
//     break;
//   case (age >=21):
//     console.log('Yay! You can drink!')
//     break;
//   case (age >= 18):
//     console.log('Yay! You can vote!')
//     break;
//   case (age <= 17):
//     console.log('Boring')
//     break;
//   default:
//     console.log('Not a number bro')
// }
// Collapse

//***************************************************************** */
// // Fizz Buzz -- Conditionals 
// let FB = 15;
// if (FB % 3 === 0 && FB % 5 === 0) {
//   console.log('Fizz Buzz');
// } else if (FB % 5 === 0) {
//   console.log('Buzz');
// } else if (FB % 3 === 0) {
//   console.log('Fizz');
// }
// let FB = 30;
// switch (true) {
//   case (FB % 3 === 0 && FB % 5 === 0):
//   console.log('Fizz Buzz');
//   break;
//   case (FB % 5 === 0):
//   console.log('Buzz');
//   break;
//   case (FB % 3 === 0):
//   console.log('Fizz');
//   break;  
// }
// let FB = 30;
// (FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') : (FB % 5 === 0) ? console.log('Buzz') : (FB % 3 === 0) ? console.log('Fizz') : console.log(FB)

/*
Challenge (Arrays):
Color List:
* Create a function that can take in arrays.
* Create an array of colors
* Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)
* In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.
* Not to make it too hard on yourself, you can stop the count at ten
*/

//Original code:
let colors = ['yellow', 'orange', 'teal', 'violet', 'chartreuse', 'mahogany', 'periwinkle', 'magenta', 'majestic mountain purple', 'green'];

let suffixes = ['st','nd','rd','th','th','th','th','th','th','th'];

function colorNums(colorArray,suffixArray){
   for(let i =0; i<10;i++){
       console.log(`${i+1}${suffixArray[i]} is ${colorArray[i]} `)
   }
}
colorNums(colors,suffixes);

//Second result
let colors = ['green', 'blue', 'yellow', 'red', 'black', 'sky blue'];
let suffix = ['st', 'nd', 'rd', 'th'];

function colorNumbers(colorArray, suffixArray) {
  for(let i = 0; i < colorArray.length; i++ ){
    if(i >= 3){
      console.log(`${i+1}${suffixArray[3]} is ${colorArray[i]}`);
    } else {
      console.log(`${i+1}${suffixArray[i]} is ${colorArray[i]}`);
        }
  }
};

colorNumbers(colors, suffix)

for(let i = 0; i <= 100; i +=5){
  console.log(i);
}

let dog = ['a','b','c'];

for(bark of dog){
  console.log(`${bark} goes bark`);
}


///  Callbacks

function callbackFunction(){
  for(let i = 0; i < 100; i++){
      console.log(i)
  }

   const data = {
      name: 'Ralf Machio', 
      age: 66, 
      occupation: 'kickboxing'
  }
  return data;
}

function showData(dataFromFunction){
  return "hello " + dataFromFunction.name
}

console.log(
  showData(callbackFunction())
)

// EX of Promise

// Boolean declaration 
var amIGood = false;

// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);

let message = ['xearha', 'wedaiad', 'caob ', 'aewbaj', 'dcbalp', 'allall', 'badr,', 'adrwgoc', 'badcoxz', 'taguoz', 'busddb', 'noye ', 'lucklcuk', 'yoeuud', 'replca', 'dkick']


function blanks(myNoun, myAdj, myVerb, myAdv){
  let results = 'the' + myNoun + ' ' + myAdj + ' ' + myVerb + ' ' + myAdj;
  return results
}

blanks('cat', 'furry', 'attacked', 'lazily');


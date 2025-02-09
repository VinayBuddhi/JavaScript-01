// functions in JS
// parameters are passed in functions with "," seperating them

// function sum(x, y){
//     // local variabels in function the x,y are till function is over
//     // the variables ar block scoped
//     s = x + y;
//     console.log(`The first number is = ${x}`);
//     console.log(`The second number is = ${y}`);

//     return s;
// }

// const val = console.log(`The sum is ${sum(10,25)}`);

// ARROW functions: ->
// its is a part of Modern JS in todays practice
// arrow functions are prefered

// const add = (x, y) => {
//     s = x + y;
//     return s;
// }

// const arrowMul = (a, b) => {
//     s = console.log(a * b);
//     return s;
// };

// const printHello = ()=>{
//     console.log("Hello World!!");

// }

// printHello();

// console.log(typeof printHello);

const countVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

const a = "aeiou";

console.log(countVowels(a));


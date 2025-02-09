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

// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// const a = "aeiou";

// console.log(countVowels(a));

// forEach loops for array called as HigherOrderFunction
// let arr = [6, 3, 5, 4, 7];
// passing function as arrow function: ->
//
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })

// passing normal function: ->
// arr.forEach(function printValue(val, idx, arr){
//     console.log(val,idx, arr);
    
// })

// Practice question calc square of the number in array using "forEach" metod for arrays
// let arr1 = [6, 3, 5, 4, 7];
// arr1.forEach((val) => {
//     console.log(val*val);
// })

// arr1.forEach(function SquareNum(val){
//     console.log(val * val);
// })

// let calcSquare = (val,idx ) => {
//     console.log(val * val, idx); 
   
     
// };

// arr.forEach(calcSquare)



// MAP method for arrays

// let arr = [35, 10, 20, 16, 13]

// let newArr = arr.map((val)=>{
//     return val*2;
    
// })

// console.log(newArr);
// console.log(typeof newArr);

// Filter meethod for arrays:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let evenArr = arr.filter((val)=>{
//    let res = val % 2 === 0;
//    return res
// })

// console.log(evenArr);
// console.log(typeof evenArr);




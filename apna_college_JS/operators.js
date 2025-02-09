// let num = prompt("Enter a number to check:");

// if(num % 5 === 0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"is not a multiple of 5");
// }

// P Question 2:

// arrays 
// let heroes = ['ironman', 'thor', 'hulk', 'shaktiman', 'spiderman', 'antman']

// //accessing array using for of loop 
// for(let i=0; i < heroes.length; i++){
//     console.log(heroes[i]); 
// }


// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];


// let city1 = cities[2] = "blg";
// console.log(city1);

// for (let j of cities){
//     console.log(j.toUpperCase()); 
// }

// sum of marks in an array and average

let marks = [85,97,44,37,76,60];

let sum = 0;

// for(let i = 0; i < marks.length; i++){
//     sum = sum + marks[i];
// }

// for(let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log("sum of the marks in array is ",sum);
// console.log("The average of the marks is ", sum / marks.length );
// console.log(`The average marks of class is = ${avg} & sum of the marks is = ${sum}`);

// Practice Q2: array

let price = [250, 645, 300, 900, 50];

let i=0;
for(let val of price){
    // console.log(`value at index ${i} = ${val}`);
    off = val/10;
    price[i] = price[i]-off;
    console.log(price[i]);
    i++;
}

console.log(`The updated array list is ${price}`);


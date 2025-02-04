// Primitive datatypes in JS
// Number, String, Boolean, Undefined, Null, BigInt, Symbol

// Number datatype is a Primitive variable to store numbers :
let age = 24;
console.log(age);
console.log(typeof age);

// Number datatype example for floating point numbers :
let price = 100.50;
console.log(price);
console.log(typeof price);

// String datatype "****" is a Primitive variable to store string or character's :
let fullName = "vinay";
console.log(fullName);
console.log(typeof fullName);

// Boolean datatype true or false is a Primitive variable to store boolean expression True or False :
isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);

// Undefined datatype it is a Primitive variable its value is not known :
let x;
console.log(x);
console.log(typeof x);

// Null datatype is a object datatype it is a primitive datatype to specify null value in a variable :
let y = null;
console.log(y);
console.log(typeof y);

// BigInt datatype is a Primitive variable to store big integer values :
let num = BigInt("123");
console.log(num);
console.log(typeof num);

// symbol datatype is a Primitive variable :
let Name = Symbol("Hello!");
console.log(Name);
console.log(typeof Name);


// Non Primitive datatype consists of objects
// Object is collection of values stored in key-value pairs like key:value start and end in { } braces

const student = {
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

console.log(student);
console.log(typeof student);

// accessing the keys in objects
console.log(student["fullName"]);
console.log(student.age);

// To update the variable values or key-value pairs in objects
student["age"] = student["age"] + 1;
console.log(student["age"]);

student["fullName"] = "Vinay";
console.log(student["fullName"]);


// practice question about a amazon product to represent it in objects

const product = {
    title : "Parker Jotter",
    rating : 4,
    isDealOfDay : true,
    prize : 270,
    offer : 5,
}
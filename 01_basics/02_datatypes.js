"use strict"; // treat all js code as newer version

alert("Hello World")
// we are using nodejs not browser

console.log(3+3);
console.log("riya");

// use prettier extension in vs code to format the code
// ecma script : original documentaion of javascript
// also we can refer to mdn web docs , it is comparitively easy.
/*
2 documentation: tc 39 and mdn web docs 
*/

let name = "Riya" // string datatype
let age = 20 // number datatype
let isLoggedIn = false // boolean datatype
let state; // undefined datatype
let nullVariable = null; // null datatype
let bigIntVariable = BigInt(1234567890123456789012345678901234567890); // bigint datatype
let symbolVariable = Symbol("unique"); // symbol datatype   
let user = {
    name: "Riya",
    age: 20,
    isLoggedIn: false
}; // object datatype
let numbers = [1, 2, 3, 4, 5]; // array datatype
// array is a special type of object in javascript
// it is a collection of items, which can be of any datatype    
// we can use typeof operator to check the datatype of a variable
console.log(typeof name); // string
console.log(typeof age); // number

// bigint we will rarely use to handle large numbers
// number range is from -2^53 to 2^53
// boolean is used to represent true or false values
// undefined is used when a variable is declared but not assigned a value
// null is used to represent a variable that has no value
// symbol generally used when talking about react

// object is a collection of key-value pairs
// it is used to represent real-world entities
// array is a special type of object that is used to store a collection of items
// we can use dot notation or bracket notation to access the properties of an object
console.log(user.name); // Riya

// null is of object type, but it is a special case
// undefined is a primitive type, it is not an object
let score = "33" 

console.log(typeof score); 
console.log(typeof (score)); 

let valueinnumber = Number(score); // convert string to number
console.log(typeof valueinnumber); // number

let score2 = "33abc";
let valueinnumber2 = Number(score2); // convert string to number
console.log(typeof valueinnumber2); // number
console.log(valueinnumber2); // NaN (Not a Number)
// above can be a case when the string is not a valid number
// NaN is a special value in JavaScript that represents an invalid number
// we can use isNaN() function to check if a value is NaN
console.log(isNaN(valueinnumber2)); // true
// isNaN() function returns true if the value is NaN, otherwise it returns false
let score3 = null;
let valueinnumber3 = Number(score3); // convert null to number
console.log(valueinnumber3); // 0   
// null is converted to 0 when we convert it to number
// this is because null is considered as 0 in JavaScript
let score4 = true;
let valueinnumber4 = Number(score4); // convert boolean to number   
console.log(valueinnumber4); // 1
// true is converted to 1 and false is converted to 0 when we convert it to
// number
let score5 = false;
let valueinnumber5 = Number(score5); // convert boolean to number
console.log(valueinnumber5); // 0
// we can also use parseInt() and parseFloat() functions to convert string to number
let score6 = undefined;
let valueinnumber6 = Number(score6); // convert undefined to number
console.log(valueinnumber6); // NaN
// undefined is converted to NaN when we convert it to number
// this is because undefined is not a valid number
let isloggedin = 1;
let booleanisloggedin = Boolean(isloggedin); // convert number to boolean
console.log(booleanisloggedin); // true
// coverting an empty string to boolean
let emptyString = "";
let booleanEmptyString = Boolean(emptyString); // convert empty string to boolean
console.log(booleanEmptyString); // false 
// string with value will convert to true
let nonEmptyString = "Hello";
let booleanNonEmptyString = Boolean(nonEmptyString); // convert non-empty string to boolean
console.log(booleanNonEmptyString); // true

// converting an array to boolean
let array = [1, 2, 3];
let booleanArray = Boolean(array); // convert array to boolean
console.log(booleanArray); // true
// converting an empty array to boolean
let emptyArray = [];
let booleanEmptyArray = Boolean(emptyArray); // convert empty array to boolean
console.log(booleanEmptyArray); // true
// empty array is considered as true in JavaScript
// converting an object to boolean
let object = { name: "Riya" };
let booleanObject = Boolean(object); // convert object to boolean
console.log(booleanObject); // true
// converting an empty object to boolean
let emptyObject = {};
let booleanEmptyObject = Boolean(emptyObject); // convert empty object to boolean
console.log(booleanEmptyObject); // true
// empty object is considered as true in JavaScript
// converting a function to boolean

let somenumber = 33;
let stringNumber = String(somenumber); // convert number to string
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string

// converting a boolean to string
let isTrue = true;
let stringBoolean = String(isTrue); // convert boolean to string
console.log(stringBoolean); // "true"
console.log(typeof stringBoolean); // string
// converting null to string
let nullValue = null;
let stringNull = String(nullValue); // convert null to string
console.log(stringNull); // "null"
console.log(typeof stringNull); // string
// converting undefined to string
let undefinedValue = undefined;
let stringUndefined = String(undefinedValue); // convert undefined to string
console.log(stringUndefined); // "undefined"
console.log(typeof stringUndefined); // string
// converting an array to string
let arrayValue = [1, 2, 3];
let stringArray = String(arrayValue); // convert array to string
console.log(stringArray); // "1,2,3"
console.log(typeof stringArray); // string
// converting an object to string
let objectValue = { name: "Riya" };
let stringObject = String(objectValue); // convert object to string
console.log(stringObject); // "[object Object]"
console.log(typeof stringObject); // string

// ****************OPERATIONS******************

let value = 3;
let negvalue = -value; // negation
console.log(negvalue); // -3

// console.log(2+2); // addition
// console.log(2-2); // subtraction        
// console.log(2*2); // multiplication
// console.log(2/2); // division
// console.log(2%2); // modulus (remainder)
// console.log(2**2); // exponentiation (2 raised to the power of 2)
// console.log(2++); // increment (not recommended, use value++)   


let str1 = "Hello";
let str2 = "World";
let concatenatedString = str1 + " " + str2; // string concatenation
console.log(concatenatedString); // "Hello World"   
// console.log("Hello" + " " + "World"); // string concatenation
// console.log("Hello" - "World"); // NaN (Not a Number, subtraction is not allowed on strings)
// console.log("Hello" * "World"); // NaN (Not a Number, multiplication is not allowed on strings)
// console.log("Hello" / "World"); // NaN (Not a Number, division is not allowed on strings)
// console.log("Hello" % "World"); // NaN (Not a Number, modulus is not allowed on strings)
// console.log("Hello" ** "World"); // NaN (Not a Number, exponent  iation is not allowed on strings)       
console.log("1"+ 1); // "11" (string concatenation, 1 is converted to string)
console.log("1"+2+2); // "122" (string concatenation, 1 is converted to string, then 2 is converted to string)
console.log(1+2+"2"); // "32" (1 and 2 are added first, then 2 is converted to string)
console.log(1+2+2); // 5 (1 and 2 are added)
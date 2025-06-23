// two types of data categorisation on the basis of how they are stored in memory and how they are accessed
// 1. Primitive Data Types

// 7 types: string, number, boolean, null, undefined, symbol, bigint


// 2. Reference Data Types-: non primitive data types
// 3 types: object, array, function
// javascript is a dynamically typed language, meaning that variables can hold values of any type and can change types at runtime.
// Primitive data types are immutable, meaning that their values cannot be changed once they are created.
// Reference data types are mutable, meaning that their values can be changed after they are created.       
// Primitive data types are stored in the stack memory, while reference data types are stored in the heap memory.       
// Primitive data types are passed by value, meaning that when a variable is assigned to another variable, a copy of the value is created.
// Reference data types are passed by reference, meaning that when a variable is assigned to another variable, a reference to the original object is created.
// Primitive data types are compared by value, meaning that when two variables are compared, their values are compared.
// Reference data types are compared by reference, meaning that when two variables are compared, their references
 
const heroes= ['riya','siddhartha'];
let myObj={
    name: 'siddhartha',
    age: 20,
    isActive: true,
    friends: ['riya', 'siddhartha'],
    address: {
        city: 'Delhi',
        state: 'Delhi'
    },
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
}

const myFunction = function() {
    console.log('This is a function');
}
// non primitive data types are of object type
console.log(typeof heroes); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function which is basically object function
// 
let myname = 'riya';
let myname2 = myname; // primitive data type, so it will create a copy
myname2 = 'siddhartha'; // changing the value of myname2 will not change the value of myname
console.log(myname); // 'riya'
console.log(myname2); // 'siddhartha'

let user1 = {
    name: 'riya',
    age: 20
};
let user2 = user1; // reference data type, so it will create a reference to

user2.age = 30; // changing the value of user2 will change the value of user1
console.log(user1.age); // 30

// user1 and user2 are pointing to the same object in heap type of memory
// so changing the value of user2 will change the value of user1

console.log(2>1); // greater than
console.log(2<1); // less than
console.log(2>=1); // greater than or equal to
console.log(2<=1); // less than or equal to
console.log(2==1); // equal to
console.log(2!=1); // not equal to

// ****************COMPARISON******************
// avoid this type of comparison
console.log("2" == 2); // loose equality (type coercion
console.log("2">1) // loose greater than (type coercion)
console.log("2"<1) // loose less than (type coercion) 
console.log(null>0);
console.log(numll==0); // loose equality with null, converted null to 0
console.log(null==undefined); // loose equality with null and undefined
// check with defined to...
// comparison and equality check works in JavaScript with type coercion
// this means that JavaScript will convert the values to the same type before comparing them
// strict check 
console.log("2" === 2); // strict equality (no type coercion)
console.log("2" !== 2); // strict not equal (no type coercion)


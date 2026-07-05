// console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined (hare *a* is not a property of window, asking for window.a = asking for window.anythingRandom)
console.log(window.b); // 15
console.log(window.c); // undefined

// From Lecture Code 05 - Let and Const.js

// Accessing before declaration
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // 10

// var is accessible before (as undefined)
console.log(b); // undefined
var b = 20;
console.log(b); // 20

// const must be initialized at declaration
// const c;         // SyntaxError: Missing initializer in const declaration
const c = 30;
console.log(c); // 30

// const cannot be reassigned
// c = 40;          // TypeError: Assignment to constant variable

// let can be reassigned but not redeclared
a = 50;
console.log(a); // 50
// let a = 60;   // SyntaxError: Identifier 'a' has already been declared

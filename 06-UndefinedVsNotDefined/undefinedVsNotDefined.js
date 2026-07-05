//*undefined* — A Placeholder Value
var x;
console.log(x); // undefined — x exists, but has no assigned value yet
// undefined is falsy
if (!x) {
  console.log("x is falsy"); // not printed — x is 7 now
}

var x = 7;
console.log("now x is assigned by", x); // now x is assigned by 7
console.log(typeof x); // number
if (!x) {
  console.log("x is falsy"); // not printed — x is 7 now
} else {
  console.log("x is truthy"); // printed — x is 7 now
}

// *undefined* **is NOT the same as** *null*
var a; // undefined (engine assigned it)
var b = null; // null (programmer assigned it explicitly)
console.log(a); // undefined
console.log(b); // null
console.log(typeof a); // undefined

console.log(y); // ReferenceError: y is not defined — y does not exist at all

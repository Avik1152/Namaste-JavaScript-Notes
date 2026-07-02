//Hoisting Example 1
getName(); // Namaste Javascript
console.log(x); // undefined
var x = 7;
function getName() {
  console.log("Namaste Javascript");
}

// Hoisting Example 2
getSum(1 + 2); // 3
var getSum = (a, b) => {
  console.log(a + b);
};

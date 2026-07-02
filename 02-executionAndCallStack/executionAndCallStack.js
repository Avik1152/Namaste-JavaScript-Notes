// This causes stack overflow
/*function infinite() {
  return infinite(); // pushes forever, never pops
}
infinite(); // RangeError: Maximum call stack size exceeded// This causes stack overflow*/

var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

// Shadowing
// var a = 100;
// {
//   var a = 10; // same name as global var
//   let b = 20;
//   const c = 30;
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(a); // 10, as the block did not create a new variable but modified the global one.

let x = 100;
{
  let x = 10; // different variable, block scoped
  console.log(x); // 10
}
console.log(x); // 100

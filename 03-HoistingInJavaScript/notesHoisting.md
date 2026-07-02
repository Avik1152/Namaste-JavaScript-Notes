
# Hoisting in JavaScript

Hoisting is a concept in JavaScript that allows variables and function declarations to be accessed before they are actually defined in the code. During the memory creation phase of the execution context, variables are initialized to *undefined*, while function declarations are *stored fully* function body in memory.

* *Phase 1* — **Memory Creation Phase:**
    01. JS scans the entire code before executing anything
    02. Allocates memory for every variable (*assigned undefined*) and function (*stored fully*)
    03. Variable Hoisting(var): When the JS engine encounters *var n = 2*;, during Phase 1 (memory allocation) it stores *n → undefined*. The actual assignment (*n = 2*) only happens in Phase 2(code execution) when that line is reached.(*var* variables are hoisted with value *undefined*)
       * *let* and *const* — Temporal Dead Zone(*let* and *const* are also hoisted, but they are placed in a Temporal Dead Zone (TDZ) — a special state where the variable exists in memory but cannot be accessed until its declaration(during phase 2) line is reached. Accessing them before their declaration throws a *ReferenceError*.)
    04. Hoisting works *differently for function declarations*,(*Normal*)Function declarations are stored completely in memory during Phase 1 — the entire function body is available. This means you can call a function before its definition in the code. But while *function expressions* and *arrow function expression* behave like variables and are hoisted with an initial value of undefined.
    05. This is why hoisting works — memory is allocated before code runs.
        Code example:
        ```javascript
        //Example 1:
            // From Lecture Code 01 - Hoisting in Javascript.js
            console.log(x);     // undefined  (var is hoisted with undefined)
            // console.log(y);  // ReferenceError (let is in TDZ)

            var x = 7;
            let y = 5;

            function getName() {
              console.log("Namaste JavaScript");
            }

        // Example 2:
            var n = 2;

            function square(num) {
                var ans = num * num;
                return ans;
            }

            var square2 = square(n);
            var square4 = square(4);
        ```
        Phase 1 — Memory Allocation(Example 2):
        * n       → undefined,
        * square  → function square(num) { var ans = num *     num; return ans; },
        * square2 → undefined,
        * square4 → undefined.
            *...the process whereby the interpreter appears to move the declaration of variables, functions, classes, or imports to the top of their scope, prior to execution of the code.* And after all the variables and functions are Allocated in the memory that allows variables and function declarations to be accessed before they are actually defined in the code this in called *Hoisting*.
                * that means *Hoisting* allows us to use variables and call functions before they are actually declared in the code.( *Hoisting is a result of the Memory Creation Phase (Phase 1) of Execution Context*)
                * Using a variable or calling a function before its declaration will not result in an error, but the variable will have the value *undefined* until it is assigned a value.
                * If a variable is not declared at all, it is considered "not defined" and will result in an error when accessed.
                * Hoisting works *differently for function declarations*, function expressions and arrow function expression. (Normal)Function declarations are fully hoisted, while function expressions and arrow function expression behave like variables and are hoisted with an initial value of undefined.
            * Examples of Hoisting:
                ```javascript
                // Example 1:
                    getName(); // Namaste Javascript
                    console.log(x); // undefined
                    var x = 7;
                    function getName() {
                        console.log('Namaste Javascript');
                    }
                ```
                   * Below is Technical Language (*Use this in Interviews*)
                   1. Despite calling the getName() function before its actual declaration, it executes successfully and prints "Namaste Javascript" because function declarations are hoisted.
                   2. The variable x is hoisted as well but is assigned the value undefined until it is later assigned the value 7.
                ```javascript
                //Example 2:
                   getName(); // Namaste JavaScript
                   console.log(x); // Uncaught Reference: x is not defined.
                   console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
                   function getName() {
                       console.log('Namaste JavaScript');
                   }
                ```
                   * Below is Technical Language (*Use this in Interviews*)
                   1. In this code block, we can see that the function getName() is called before its declaration. However, it executes   successfully and prints "Namaste JavaScript" because function declarations are hoisted.
                   2. The variable x is accessed, but since it is not declared, it throws an error Uncaught Reference: x is not defined.
                   3. The console.log(getName) statement outputs the function definition as ,
                   function getName() 
                        { console.log("Namaste JavaScript"); }
                ```javascript
                // Example 3:
                   getName(); // Uncaught TypeError: getName is not a function
                   console.log(getName);
                   var getName = function () {
                       console.log('Namaste JavaScript');
                   };
                   // The code won't execute as the first line itself throws a TypeError.
                ``` 
                   * Below is Technical Language (*Use this in Interviews*)
                   1. In this code block, we have a function expression assigned to the variable getName.
                   2. When getName() is called before the variable declaration, it throws a TypeError because at that point, getName is not a function but a variable with the initial value undefined.
                   3. The console.log(getName) statement outputs the value of the variable getName, which is undefined.
                   4. The code execution stops after the first line due to the TypeError, so the function expression is never assigned to the variable getName.


# *undefined* vs Not Defined

*undefined* is a value JavaScript assigns to variables that exist but haven't been given a value yet. "Not defined" means the variable doesn't exist at all.

Difference between *undefined* and *not defined*

* *undefined* means that memory has been allocated to a variable but no value has been assigned yet.
    > 1. *undefined* — A Placeholder Value: During **Phase 1 (Memory Creation)** of the Execution Context, JavaScript allocates memory for every variable it finds in the code and assigns each one the special value *undefined* as a placeholder. And in the **Phase 2 (Code Execution)** the *undefined* replace and assigned with another value.

    ```javascript
        var x;
        console.log(x); // undefined  — x exists, but has no assigned value yet
    ```

    > *undefined* **is NOT the same as** *null* — Both *undefined* and *null* are "empty-ish" values but with different meaning: *undefined* = "not yet assigned" — the engine's default and *null* = "intentionally empty" — programmer's explicit choice

    ```javascript
        var a;          // undefined (engine assigned it)
        var b = null;   // null (programmer assigned it explicitly)

        console.log(a); // undefined
        console.log(b); // null
    ```

* *not defined* refers to a variable that has not been declared or allocated any memory.
    > *Not Defined* — A Reference Error: If you try to access a variable that was **never declared** anywhere in the code, JavaScript cannot find it in any scope. The engine throws a **ReferenceError:** *x is not defined*.

* Code Example of *undefined* and not defined

    ```javascript
    //Example 1:
        // From Lecture Code 03 - Defined and undefined.js

        var x;
        console.log(x);         // undefined (declared, not assigned)

        console.log(typeof x);  // "undefined"

        x = 7;
        console.log(x);         // 7 (now assigned)

        // Accessing undeclared variable
        // console.log(y);      // ReferenceError: y is not defined

        // undefined is falsy
        if (!x) {
        console.log("x is falsy"); // not printed — x is 7 now
        }

        var a;
        if (!a) {
        console.log("a is falsy"); // printed — undefined is falsy
        }
    // Example 2
        var a; // Memory is allocated for 'a', but no value is assigned yet
        console.log(a); // Output: undefined

    // Example 3
        var x;
        console.log(x); // Output: undefined

    // Example 4
        console.log(y); // Output: ReferenceError: y is not defined
    ```

## note

* JS is a loosely typed / weakly typed language. It doesn't attach variables to any datatype. We can say var a = 5, and then change the value to *boolean* a = true or *string* a = 'hello' later on.
* Avoid assign *undefined* to a variable manually, Not a good practice.

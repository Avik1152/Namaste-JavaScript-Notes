# Shortest JS Program, Window and this Keyword

## JavaScript Shortest Program

The shortest JavaScript program is an *empty file*. Although there is no code to execute, the JavaScript engine performs several tasks behind the scenes:

1. Creates the Global Execution Context (GEC) [and the global memory component (variable environment) is set up.]
2. The JavaScript engine Creates the *window* object (in browser environments) which contains various functions and variables.
   * All global variables and functions you declare become properties of *window*
   * Built-in browser APIs (*setTimeout*, *console*, *fetch*, *localStorage*) are all properties of *window*
   * When you declare a variable with *var* at the top level (not inside any function), it becomes a property of the *window* object.
        * However, variables declared with *let* or *const* at the global level do not attach to window. For example:

        ```javascript
           let y = 20;
           console.log(window.y); // undefined — let doesn't attach to window
        ```

   * You can access window properties with or without the *window.* prefix. for example:

        ```javascript
        //Example 1:
            var name = "Namaste";
            console.log(window.name); // "Namaste" — var globals attach to window
            console.log(name);        // "Namaste" — same thing, window. is implicit
        
        //Example 2:
            var x = 10;
            console.log(x); // 10
            console.log(this.x); // 10
            console.log(window.x); // 10
        ```

3. Sets up the *this* keyword at the global level (or At global level, *this === window*).
4. If we create any variable(with *var*) in the global scope, then the variables get attached to the global object.
    * However, variables declared with *let* or *const* at the global level do not attach to *window*.
5. In different JavaScript Runtime Environments, the global object may have different names (e.g., *window* in browsers, *global* in Node.js, *self* in Web Workers, *globalThis* in Universal[standardized in ES2020]).

6. Code Example:

```javascript
    // Empty file — JS engine still sets up:
    // 1. Global Execution Context
    // 2. window object
    // 3. this keyword

    var course = "Namaste JavaScript";
    let instructor = "Akshay Saini";

    console.log(window.course);     // "Namaste JavaScript"
    console.log(window.instructor); // undefined (let doesn't attach to window)
    console.log(this === window);   // true
    console.log(this.course);       // "Namaste JavaScript"
```

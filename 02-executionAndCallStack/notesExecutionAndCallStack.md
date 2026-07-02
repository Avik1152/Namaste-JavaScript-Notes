
# How JavaScript Code is executed?

When a JS program runs, a Global Execution Context (GEC) is created. But what happens when a function is called inside that program? A new Execution Context is created for it. And if that function calls another function? Yet another one.

## The Call Stack

JavaScript needs a way to keep track of all these Execution contexts — to know which one is currently running, and which ones are waiting. That mechanism is the Call Stack.

* It follows *LIFO* — Last In, First Out.
* It maintains the order of execution of execution contexts.
* **How Call Stack Works**:
  01. When the program starts → GEC is created and pushed onto the Call Stack and The bottom execution context is the Global Execution Context and others are Function EC.
  02. When a function is called → a new Execution Context is created and pushed on top and the topmost execution context is the one currently being executed.
  03. When a function returns → its Execution Context is popped off the stack
  04. When the program finishes → GEC is popped off and the stack is empty and Execution of program completed.

## Stack Overflow

If functions call each other infinitely (e.g. unbounded recursion), the Call Stack fills up completely. This results in a Stack Overflow error — the engine throws a *Maximum call stack size exceeded* error.

* Example of Stack Overflow:

        ```javascript
        // This causes stack overflow
        function infinite() {
          return infinite(); // pushes forever, never pops
        }
        infinite(); // RangeError: Maximum call stack size     exceeded
        ```

## Code Example-

* *Phase 2* — **Code Execution Phase:**
    01. JS executes the code line by line
    02. Variables(Allocated in Memory Creation Phase) get their actual values assigned
    03. Functions are invoked by creating new Execution Contexts.

        * The execution context has its own *memory* and *code* components.
        * Code inside the function is executed.
        * *return* statements return control to the invoking context.
        * Return values are stored in memory if stored in variable.
        * The execution context is deleted after the function finishes.

    04. example:
        ```javascript
        var n = 2;

        function square(num) {
            var ans = num * num;
            return ans;
        }

        var square2 = square(n);
        var square4 = square(4);
        ```
        >> Phase 2 — Code Execution:
            n = 2                        (line 1 executed)
            square2 = square(2) called   (new Execution Context created)
                ans = 2 * 2 = 4
                returns 4 → square2 = 4
            square4 = square(4) called   (another new Execution Context created)
                ans = 4 * 4 = 16
                returns 16 → square4 = 16

        **Call Stack trace:**
           * Step 1: GEC created → pushed to stack
            Stack: [GEC]
           * Step 2: square(2) called → new EC created, pushed
            Stack: [GEC, EC(square(2))]
            Inside EC: ans = 2 * 2 = 4, return 4
           * Step 3: square(2) returns → EC popped
            Stack: [GEC]
            square2 = 4
           * Step 4: square(4) called → new EC created, pushed
            Stack: [GEC, EC(square(4))]
            Inside EC: ans = 4 * 4 = 16, return 16
           * Step 5: square(4) returns → EC popped
            Stack: [GEC]
            square4 = 16
           * Step 6: Program ends → GEC popped
            Stack: []


# How JavaScript Works?

The Execution Context is the foundational concept of JavaScript. Before a single line of your code runs, the JS engine creates an environment — *the Execution Context* — that manages all variable storage and code execution.

## Execution Context (JavaScript)

    * Everything in JavaScript happens inside the execution context.
    * The execution context is like a big box or container where the JavaScript code is executed.
    * It consists of two components: the memory component (variable environment) and the code component (thread of execution).

## Global Execution Context (GEC)

    When a JS program starts, a Global Execution Context is created automatically. It is the outermost context(bottommost context on the Call Stack). Everything at the top level of your script runs inside the GEC.

* Each Function calls create ECs on top of the GEC — those ECs can reference the GEC's variables (via scope chain), but the GEC cannot reach into a function's local EC.

|Variable Environment|Thread of Execution |
|--------------------|--------------------|
|**Memory component**|**Code component**  |
|Stores variables    |\*------------------|
|Stores function     |\*------------------|
|definitions         |\*------------------|
|Key : Value pairs   |\*------------------|

* Memory Component (Variable Environment):
  01. Variables and functions are stored in the memory component as key-value pairs.
  02. Variables are stored with the value *undefined* initially. And Functions are stored with their *entire function body*.
  03. The memory component is also known as the variable environment.
  04. When the JS engine runs a program, it goes through two phases:
    *Phase 1* — **Memory Creation Phase:**
    01. JS scans the entire code before executing anything
    02. Allocates memory for every variable (*assigned undefined*) and function (*stored fully*)
    03. This is why hoisting works — memory is allocated before code runs.
        example:
        ```javascript
            var n = 2;

            function square(num) {
                var ans = num * num;
                return ans;
            }

            var square2 = square(n);
            var square4 = square(4);
        ```
        >> Phase 1 — Memory Allocation:
            n       → undefined,
            square  → function square(num) { var ans = num *     num; return ans; },
            square2 → undefined,
            square4 → undefined.
            (all the variables and functions are Allocated the memory this in called Hoisting).

* Code Component (Thread of Execution):
  01. The code component is where the JavaScript code is executed line by line(that's means Executes code one line at a time, in order).
  02. JavaScript Characteristics - *JavaScript is a synchronous single-threaded language*
  **Synchronous:** It executes only one command at a time in a specific, sequential order — one after another. It proceeds to the next line(command) only when the current line(command) has finished executing.
  **Single-threaded:** Becouse it has only one Call Stack. It executes Only one command executes at a time — this is what makes JavaScript single-threaded.
  03. It is also known as the thread of execution.
  04. *Phase 2* — **Code Execution Phase:**
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

### In SORT

01. Every JS program starts by creating a Global Execution Context
02. An Execution Context = Memory Component + Code Component
03. Phase 1 allocates memory (variables → undefined, functions → full body)
04. Phase 2 executes code line by line
05. Each function call creates a brand new Execution Context
06. JS is synchronous and single-threaded — by order and one thing at a time

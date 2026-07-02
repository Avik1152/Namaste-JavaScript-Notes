# Interview Questions[Execution & Call Stack]

01. What is the Call Stack?
    JavaScript needs a way to keep track of all the Execution contexts — to know which one is currently running, and which ones are waiting. That mechanism is the Call Stack.
    * It follows LIFO — the last context pushed is the first to be popped.
02. What happens to the Call Stack when a function is called?
    A new Execution Context is created for that function and pushed onto the top of the Call Stack. When the function returns, its context is popped off.
03. What is a Stack Overflow?
    If functions call each other infinitely (e.g. unbounded recursion), the Call Stack fills up completely. This results in a Stack Overflow error — the engine throws a *Maximum call stack size exceeded* error.
04. What other names does the Call Stack go by?
    Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack.

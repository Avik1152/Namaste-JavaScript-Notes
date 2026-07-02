# Interview Questions[Function]

01. What happens inside the JS engine when a function is called?
    A new Execution Context is created for that function call. It goes through Phase 1 (memory allocation for local variables) and Phase 2 (code execution). The EC is pushed onto the Call Stack when the function starts, and popped when it returns.
02. Does a function's local variable affect variables outside it?
    No. Each function has its own Variable Environment (memory space). A *var x* inside a function is completely separate from a *var x* outside it.
03. What happens to a function's EC after it returns?
    The EC is popped off the Call Stack and destroyed. All local variables in it are gone (unless captured in a closure).
04. Can GEC's memory variables be accessed inside a function?
    Yes — functions can access variables from outer scopes via the scope chain. But the GEC cannot access variables that are local to a function.

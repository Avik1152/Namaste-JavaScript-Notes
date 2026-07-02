
# Interview Questions[Hoisting]

01. What is hoisting?
    *...the process whereby the interpreter appears to move the declaration of variables, functions, classes, or imports to the top of their scope, prior to execution of the code.* And after all the variables and functions are Allocated in the memory that allows variables and function declarations to be accessed before they are actually defined in the code this in called *Hoisting*
02. What is the value of a *var* variable before its assignment line?
    *undefined*. The variable exists in memory (from Phase 1) but its assigned value hasn't been set yet.
03. Can you call a function before its declaration?
    Yes — for function declarations. Their entire body is stored in Phase 1. But function expressions and arrow function assigned to var variables cannot be called before the assignment line(phase 2).
04. What happens if you access a *let* or *const* variable before its declaration?
    A *ReferenceError* is thrown because *let/const* are in the Temporal Dead Zone until their declaration line is reached(phase 2 — Code Execution).

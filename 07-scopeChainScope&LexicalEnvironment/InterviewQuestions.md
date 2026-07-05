# Interview Questions[The Scope Chain, Scope & Lexical Environment]

01. What is scope in JavaScript?
    Scope defines the region of code where a variable is accessible. Variables declared in a function are scoped to that function; variables in the GEC are globally scoped.
02. What is a Lexical Environment?
    A Lexical Environment is the combination of local memory (variables/functions in the current scope) plus a reference to the parent's Lexical Environment. It is created whenever an Execution Context is created.
03. What is the Scope Chain?
    The Scope Chain is the series of Lexical Environments linked together from child to parent. When a variable is not found locally, JS traverses the scope chain upward until it finds the variable or exhausts all environments.
04. What determines a function's scope in JavaScript?
    Where the function is written (defined) in the source code — not where it is called from. This is called lexical scope (or static scope).

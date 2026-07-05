# Interview Questions[*undefined* and not defined]

01. What is *undefined* in JavaScript?
    *undefined* — A Placeholder Value: During **Phase 1 (Memory Creation)** of the Execution Context, JavaScript allocates memory for every variable it finds in the code and assigns each one the special value *undefined* as a placeholder. And in the **Phase 2 (Code Execution)** the *undefined* replace and assigned with another value.
02. What does "not defined" mean?
    *Not Defined* — A Reference Error: If you try to access a variable that was **never declared** anywhere in the code, JavaScript cannot find it in any scope. The engine throws a **ReferenceError:** *x is not defined*.
03. What is the difference between *undefined* and *null*?
    *undefined* is set by the JS engine automatically as a placeholder. *null* is explicitly set by the programmer to represent an intentional absence of value.
04. Is undefined falsy?
    Yes. *undefined* is one of JavaScript's falsy values, along with *null*, *0*, *''*, *false*, and *NaN*.

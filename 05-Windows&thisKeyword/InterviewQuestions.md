# Interview Questions[*Window* & *this* Keyword]

01. What is the shortest JavaScript program?
    An empty file. Even with no user code, the engine creates the *GEC*, *window* object, and *this* binding.
02. What is the *window* object?
    The *window* object is the global object in browser environments. It contains all global variables (declared with *var*), built-in browser APIs, and is the value of *this* at the global scope.
03. What does *this* equal at the global scope in a browser?
    *this* equals the *window* object. *this === window* is *true* at the global level.
04. Do *let* and *const* variables attach to the *window* object?
     No. Only *var* variables declared at the global level become properties of *window*. *let* and *const* create global variables but don't attach to the global object.
05. What is *globalThis*?
    *globalThis* is a standardized way (ES2020) to access the global object across all environments — whether browser (window), Node.js (global), or web workers (self).

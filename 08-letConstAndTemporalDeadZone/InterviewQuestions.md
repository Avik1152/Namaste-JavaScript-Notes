# Interview Questions[*let*, *const* and the Temporal Dead Zone]

01. Are *let* and *const* hoisted?
    Yes, they are hoisted — but they are placed in the *Temporal Dead Zone* rather than initialized to *undefined*. They cannot be accessed until their declaration line is reached.
02. What is the Temporal Dead Zone?
    The *Temporal Dead Zone* is the period from when a *let*/*const* variable is hoisted to when its declaration line is executed. During this time, the variable exists in memory but cannot be accessed. try access, throws a *ReferenceError: Cannot access 'x' before initialization.*
03. What error does *const x*; throw?
    *SyntaxError: Missing initializer in const declaration*. *const* must always be initialized at the point of declaration.
04. What is the difference between *let* and *const*?
    Both are *block-scoped* and have *TDZ*. The difference is that *const* cannot be reassigned after initialization and must be initialized when declared. *let* allows reassignment.

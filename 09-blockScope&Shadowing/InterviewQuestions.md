# Interview Questions[Block Scope and Shadowing]

01. What is a block in JavaScript?
    A block is a pair of curly braces { } that groups multiple statements together. It is also called a compound statement. Blocks create a new scope for let and const variables.
02. What is shadowing in JavaScript?
    Shadowing occurs when a variable in an inner scope has the same name as one in an outer scope. The inner variable "shadows" (hides) the outer one within its scope. The outer variable is not modified.
03. What is illegal shadowing?
    Illegal shadowing is when you try to shadow a *let* or *const* variable with a *var* in a nested block. It throws a *SyntaxError* because *var* would escape the block and conflict with the *let*/*const* in the outer scope.
04. Can you shadow a *var* with a *let*?
    Yes. Shadowing *var* with *let* is valid. The *let* creates a new block-scoped variable that shadows the *var* within the block.

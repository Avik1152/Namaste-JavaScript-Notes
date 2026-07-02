# Interview Questions[Execution Context]

01. What is an Execution Context?
        An Execution Context is an environment where JavaScript code is evaluated and executed. It has two components: *Memory component(Variable Environment)* and *Code component(Thread of Execution)*.
02. What are the two phases of an Execution Context?
        *Phase 1* is the Memory Creation Phase where variables get *undefined* and functions get *stored fully*.
        *Phase 2* is the Code Execution Phase where code runs line by line.
03. What is the Global Execution Context?
        The GEC is the default context created when a JS program starts. All top-level code runs in the GEC. There is only one GEC per program.
04. Why is JS called single-threaded?
        Because it has only one Call Stack — it can do only one thing at a time.

import assert from "assert";

/**
*!The assert module provides a set of assertion functions for verifying invariants. In assert() function, if the value is not truth, then a AssertionError is thrown with a message property set equal to the value of the message parameter. 

Syntax:

assert(value[, message])

value: This parameter holds the expression that need to be evaluated. It is of any type.
message: This parameter holds the error message of string or error type. It is an optional parameter.
Return Value: This function returns assertion error of object type. 
*/

let a = 4;
let b = 6;

// try {
assert(a == b, "no error");
// } catch {
// console.log(`${a} != ${b}`);
// }

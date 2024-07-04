/*
! The assert.doesNotThrow() function asserts that the function fn does not throw an error.

TODO Syntax: 
^ assert.doesNotThrow(fn[, error][, message])
& fn: This parameter is a function which does not throw an error.
* error: This parameter is a regular expression or function. It is the    specified error. It is an optional parameter.
? message: This parameter holds the error message of string or error type. It is an optional parameter.
*/

// Requiring the module
import { strict as assert } from "assert";

// Function call
try {
  assert.doesNotThrow(() => {
    throw new TypeError("Wrong value");
  });
} catch (error) {
  console.log("Error:", error);
}

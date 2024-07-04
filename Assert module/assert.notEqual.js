// ! The assert.notEqual() function tests strict inequality between the actual and the expected parameters. If the condition is true it will not produce an output else an assertion error is raised.

// ! Syntax: assert.notEqual(actual, expected[, message])

// ! actual: This parameter holds the actual value that needs to be evaluated. It is of any type.

// ! expected: This parameter holds the expected value which is matched against the actual value. It is of any type.

// ! message: This parameter holds the error message of string or error type. It is an optional parameter.

// ! Return Value: This function returns an assertion error of object type.

import { strict as assert } from "assert";

let a = 4;
let b = "Four";

// Function call
try {
  assert.notEqual(a, b);
  console.log("No Error Occurred");
} catch (error) {
  console.log("Error: ", error);
}

a = 4;
b = 4;

// Function call
try {
  assert.notEqual(a, b);
} catch (error) {
  console.log("Error: ", error);
}

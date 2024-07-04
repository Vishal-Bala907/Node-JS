//? The assert.strictEqual() function tests strict equality between the actual and expected parameters. If the condition is true it will not produce an output else an assertion error is raised.

//? Syntax:assert.strictEqual(actual, expected[, message])

//? actual: This parameter holds the actual value that needs to be evaluated. It is of any type.
//? expected: This parameter holds the expected value which is matched against the actual value. It is of any type.
//?message: This parameter holds the error message of string or error type. It is an optional parameter.

// Requiring the module
import { strict as assert } from "assert";

// Function call
try {
  assert.strictEqual(5, 5);
  console.log("No Error Occurred");
} catch (error) {
  console.log("Error: ", error);
}

// Function call
try {
  assert.strictEqual(2, 5, new TypeError("Inputs are not same"));
} catch (error) {
  console.log("Error Occurred: ", error);
}

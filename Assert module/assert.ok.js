//^ The assert.ok() function tests if the value is true or not. If the condition is true it will not produce an output else an assertion error is raised.
//^ syntex => assert.ok(value[, message])

//^ value: This parameter holds the expression that need to be evaluated.
//^ message: This parameter holds the error message of string type.

// Requiring the module
import { strict as assert } from "assert";

// Function call
// try {
//   assert.ok(false, "It's false");
// } catch (error) {
//   console.log("Error: ", error);
// }

// Function call
try {
  assert.ok(typeof 12345 === "number");
  console.log("No error Occurred");
} catch (error) {
  console.log("Error: ", error);
}

// Function call
try {
  assert.ok(typeof 12456 === "string");
} catch (error) {
  console.log("Error Occurred: ", error);
}

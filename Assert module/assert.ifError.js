/*
& The assert.ifError() function throws value if value is not defined or null. When testing the error argument in callbacks, this function is very useful.
& Syntax: assert.ifError(value)
& value: This parameter holds the actual value. This value is thrown if value is not undefined or null. It is of any type.
& Return Value: This function returns assertion error of object type.
*/
// Requiring the module
import { strict as assert } from "assert";

// Function call
// a;
try {
  // assert.ifError("error");
  assert.ifError(a);
  // assert.ifError(null);
} catch (error) {
  console.log("Error:", error);
}

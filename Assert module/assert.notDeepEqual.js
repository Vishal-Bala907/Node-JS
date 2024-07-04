//? The assert.notDeepEqual() function tests deep strict inequality between the actual and the expected parameters. If the condition is true it will not produce an output else an assertion error is raised.
//? Syntax: assert.notDeepEqual(actual, expected[, message])

//? actual: This parameter holds the actual value that need to be evaluated. It is of any   type.

//? expected: This parameter holds the expected value which is matched against actual value. It is of any type.

//? message: This parameter holds the error message of string or error type. It is an optional parameter.

//? Return Value: This function returns assertion error of object type.

// Requiring the module
import { strict as assert } from "assert";

// Function call
// try {
//   assert.notDeepEqual({ a: "5" }, { a: "5" }); // error
//   assert.notDeepEqual({ a: "5" }, { a: 5 });
//   assert.notDeepEqual({ a: "5" }, { a: "11" });
// } catch (error) {
//   console.log("Error: ", error);
// }

//! assert.notDeepStrictEqual({ a: '1' }, { a: '24' });

try {
  // assert.notDeepStrictEqual({ a: "5" }, { a: "5" }); // error
  assert.notDeepStrictEqual({ a: "5" }, { a: 5 });
  assert.notDeepStrictEqual({ a: "5" }, { a: "11" });
} catch (error) {
  console.log("Error: ", error);
}

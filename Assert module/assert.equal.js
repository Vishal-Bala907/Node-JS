/*
! The assert.equal() function tests for equality between the actual and the expected parameters. If the condition is true it will not produce an output else an assertion error is raised. 
! syn -> assert.equal(actual, expected[, message])
! -> actual: This parameter holds the actual value that needs to be evaluated. It is of any type.
! ->expected: This parameter holds the expected value which is matched against the actual value. It is of any type.
! -> message: This parameter holds the error message of string or error type. It is an optional parameter.
*/

// Requiring the module
import { strict as assert } from "assert";

let a = 10;
let b = 20;

// Function call
// try {
//   assert.equal(a, b);
// } catch (error) {
//   console.log(`Error `, error);
// }
try {
  assert.equal(a, 10);
} catch (error) {
  console.log(`Error `, error);
}

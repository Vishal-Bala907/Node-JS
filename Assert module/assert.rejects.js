/* 
! The assert.rejects() function awaits the asyncFn promise or if the asyncFn is a function then it immediately calls the function and awaits the returned promise to complete and after that it will then check that the promise is rejected.

! Syntax: assert.rejects(asyncFn[, error][, message])

! asyncFn: This parameter is async function which throws an error synchronously.

! error: This parameter can be of type Class or a Regular expression or a validation function or an object where each property will be tested for. It is an optional parameter.

! message: This parameter will be the message provided by the AssertionError if the asyncFn fails to reject. It is an optional parameter.

! Return Value: This function returns assertion error of object type.
! */

// Requiring the module
import { strict as assert } from "assert";

// Function call
(async () => {
  // assert.strictEqual(1, 2);
  assert.strictEqual(1, 1);
  await assert
    .rejects(
      async () => {
        throw new TypeError("Wrong value");
      },
      (err) => {
        assert.strictEqual(err.name, "TypeError");
        assert.strictEqual(err.message, "Wrong value");
        return true;
      }
    )
    .then(() => {
      console.log("Reject Demo");
    });
})();

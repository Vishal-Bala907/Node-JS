/*
^ The assert.fail() function throws an AssertionError with the provided the error message or with a default error message.
^ syn -> assert.fail([message])
^ message: This parameter holds the error message of string or error type. It is an optional parameter.
*/

// Requiring the module
import { strict as assert } from "assert";

// Function call
try {
  // assert.fail();
  assert.fail(new TypeError("My custom defined error"));
} catch (error) {
  console.log("Error:", error);
}

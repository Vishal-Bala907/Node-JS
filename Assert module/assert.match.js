//* The assert.match() function expects the string input to match the regular expression. If the condition is true it will not produce an output else an assertion error is raised.
//* sytex -> assert.match(string, regexp[, message])
//* string: This parameter holds the string value that need to be evaluated. It is of string type.
//* regexp: This parameter is the regular expression which is matched against the given string value.
//* message: This parameter holds the error message of string or error type. It is an optional parameter.

// Requiring the module
import { strict as assert } from "assert";

// Function call
try {
  // assert.match("I will try to pass", /fail/);
  assert.match("I will try to pass", /pass/);
} catch (error) {
  console.log("Error:", error);
}

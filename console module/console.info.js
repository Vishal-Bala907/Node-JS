/**
 * 
 * The console.info() method is an inbuilt application programming interface of the console module which is used to print messages to stdout in a newline. It is similar to the console.log() method.

Syntax:

console.info(data, args);
Parameters: This method has two parameters as mentioned above and described below:

data: This parameter specifies the data to be printed.
args: It is an optional parameter that specifies it to be passed as substitution values in messages passed to data. All passed args are sent to util.format().
Return Value: This method doesn’t return anything but print the formatted message to stdout in a new line. 
 */

// Node.js program to demonstrate the
// console.info() method

// Accessing console module
const console = require("console");

// Calling console.info() method
console.info("this is a sample info message!");
console.info("sample info message with args: %d", 39);

// Node.js program to demonstrate the
// console.info() method

// Calling console.info() method
console.info("this is a %s" + " sample info message!");

console.info("sample info message " + "with args: %d", 34);
console.info(
  "info message: Warning " + "at function %s: line number" + " %d ff()",
  96
);

let isDebugMode = true;
console.custom_info = function (message) {
  if (isDebugMode) {
    console.log(message);
  }
};

console.custom_info("custom info message");

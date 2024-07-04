/**
 * ! Node.js console.debug() Method
Last Updated : 05 Apr, 2023
The console.debug() method is an inbuilt application programming interface of the console module which is used to print messages to stdout in a newline. Similar to the console.log() method.

Syntax:

console.debug(data, args);
Parameters: This method has two parameters as mentioned above and described below:

data: This parameter specifies the data to be printed.
args: It is an optional parameter that specifies parameters to be passed as substitution values in messages passed to data. All passed args are sent to util.format().
Return Value: This method doesn’t return anything but print the formatted message to stdout in a new line. 
*/
// Accessing console module
const console = require("console");

// Calling console.debug()
console.debug("This is a %s", " sample debug message!");
console.debug("Sample debug message" + " with args: %d", 34);
console.debug(
  "Debug message: Warning " + "at function %s: line number %d ",
  "ff()",
  96
);

let isDebugMode = true;
console.custom_debug = function (message) {
  if (isDebugMode) {
    console.log(message);
  }
};

console.custom_debug("Custom debug message");

/**
 * 
 * Node.js console.countReset() Method
Last Updated : 13 Jul, 2020
The console.countReset() method is an inbuilt application programming interface of the console module which is used to reset the count for the specific label passed to it as a parameter.

Syntax:

console.countReset( label );
Parameters: This method has one parameter as mentioned above and described below:

label: It is an optional parameter that specifies the label whose counter to be reset. Default value is “default”.
Return Value: This method does not provide any output but reset the counter for the specified label.

Below examples illustrate the use of console.countReset() method in Node.js:
 * 
 */

// Node.js program to demonstrate the
// console.countReset() method

// Accessing console module
const console = require("console");

// Calling console.count() method
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count("a");
console.count("b");

// Resetting counter
console.countReset("a");
console.countReset("b");

console.count("a");
console.count("b");

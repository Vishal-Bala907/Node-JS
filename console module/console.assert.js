/*
^ The console.assert() method is an inbuilt application programming interface of the console module which is used to assert value passed to it as a parameter, i.e. it checks whether the value is true or not, and prints an error message, if provided and failed to assert the value. 

& Syntax: console.assert(value, messages)
Parameters: This method has two parameters as mentioned above and described below:

? value: This parameter specifies the value to be asserted.
? messages: It specifies the messages to be used as error messages. Any parameters passed along with value will be considered as a message.
Return Value: This method doesn’t return anything if the value is true. If failed to assert the value then Assertion failed is logged followed by an error message, if provided in all subsequent parameters after value in util.format(). The output is used as an error message. 
*/

// Node.js program to demonstrate the
// console.assert() Method

// Accessing console module
const console = require("console");

// Calling console.assert() method
console.assert(true, "error message 1");
console.assert(false, "error message 2");

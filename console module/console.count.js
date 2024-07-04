/* Node.js console.count() Method
Last Updated : 26 Jun, 2020
* The console.count() method is an inbuilt application programming interface of the console module which is used to count label passed to it as a parameter, by maintaining an internal counter for that specific label.

* Syntax:console.count(label)
* Parameters: This method has one parameter as mentioned above and described below:

* label: It is an optional parameter specifies the label to be counted. Default value is “default”.
* Return Value: This method outputs the count of this function called with the specified label to the stdout.
*/

// Node.js program to demonstrate the
// console.count() Method

// Accessing console module
const console = require("console");

// Calling console.count()
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count("a");
console.count("b");
console.count("b");
console.count("b");

// Node.js program to demonstrate the
// console.count() Method

// Accessing console module

// Calling console.count() method
// with no parameter to count
// default label
console.count();
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count();
console.count();
console.count();
console.count("b");

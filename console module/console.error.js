/*
The console.error() function from the console class of Node.js is used to display an error message on the console. It prints to stderr with a newline.

Syntax: 

console.error([data][, ...args])
Parameter: This function can contain multiple parameters. The first parameter is used for the primary message and other parameters are used for substitution values.

Return Value: The function returns an error message.

*/

// Store number to variable
num = 20;

// Check condition
if (num < 100) {
  console.log("Enter number greater than 100");
} else {
  console.error("correct choice");
}

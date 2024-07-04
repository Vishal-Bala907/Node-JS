/**
 * Node.js console.clear() Method
Last Updated : 13 Oct, 2021
The console.clear() method is used to clear the stdout, when stdout is a TTY (Teletype) i.e. terminal it will attempt to clear the TTY. When stdout is not a TTY, this method does nothing.

The console.clear() will work differently across different operating systems and terminal types. For Linux operating systems, console.clear() operates like the clear shell command in terminal. On Windows, console.clear() will clear the current terminal viewport for the Node.js binary.

Syntax:

console.clear()
 * 
 * 
 */

// Node.js program to demonstrate the
// Buffer.clear() Method

// Both two lines will not display
// the result on screen
console.log("GeeksforGeeks");
console.log("A computer science portal");

// Clear the previous screen
console.clear();

// Display the content
console.log("Clear the console screen");

/*

! The Buffer.alloc() method is used to create a new buffer object of the specified size. This method is slower than Buffer.allocUnsafe() method but it assures that the newly created Buffer instances will never contain old information or data that is potentially sensitive.

^ Syntax Buffer.alloc(size, fill, encoding)

Parameters: This method accept three parameters as mentioned above and described below:

& size: It specifies the size of the buffer.
& fill: It is an optional parameter and specifies the value to fill the buffer. Its default value is 0.
& encoding: It is an optional parameter that specifies the value if the buffer value is a string. Its default value is ‘utf8’.
& Return Value: This method returns a new initialized Buffer of the specified size. A TypeError will be thrown if the given size is not a number.

*/
// Node.js program to demonstrate the
// Buffer.alloc() Method

// Allocate buffer of given size
// using buffer.alloc() method
var buf = Buffer.alloc(6);

// Prints: <Buffer 00 00 00 00 00 00>
console.log(buf);

//? EXAMPLE 2
// Node.js program to demonstrate the
// Buffer.alloc() Method

// Allocate buffer of given size
// using buffer.alloc() method
var buf = Buffer.alloc(6, "a");

// Prints <Buffer 61 61 61 61 61>
console.log(buf);

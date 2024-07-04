/* 
^ The Buffer.includes() method checks whether the provided value is present or included in the buffer or not.

^ Syntax: buffer.includes( value, byteOffset, encoding );

Parameters: This method accept three parameters which are listed below:

& value: It holds the value that you want to find in buffer.
* byteOffset: It is optional parameter. It refers to the starting index from which the elements of input buffer will be searched. The default value is 0.
? encoding: If the needed value is string, then you can add then encoding type also. The default value is utf-8.
TODO ==> Return Value: This method returns a Boolean value either True or False depending on the value. If value found in buffer then return True otherwise return False.
*/

// exmple 1
// Node.js program to demonstrate the
// Buffer.includes() Method

// Creating a buffer
const buffer = Buffer.alloc(8, "Geek One");

console.log(buffer.includes("Geek"));

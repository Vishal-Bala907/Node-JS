/* 
The Buffer.equals() method is used to compare two buffer objects and returns True of both buffer objects are the same otherwise returns False.

Syntax:

buffer.equals( buf )
Parameters: This method accepts single parameter otherBuffer which holds the another buffer to compare with buffer object.

Return Value: This method returns True if both buffer objects are equal otherwise returns false.

Below examples illustrate the Buffer.equals() method in Node.js:
*/
// Node.js program to demonstrate the
// Buffer.equals() Method

// Create two bufferes
var buf1 = Buffer.from("Hi");
var buf2 = Buffer.from("Hi");

// Prints true(boolean value)
console.log(buf1.equals(buf2));

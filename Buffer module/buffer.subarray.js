/*

* The buffer.subarray() method is an inbuilt application programming interface of the buffer module which is used to crop a part of array i.e. create sub-array from an array.
* Syntax: Buffer.subarray( starting_index, ending_index )

Parameters: This method has two parameters as mentioned above and described below: 

& starting_index: This parameter specifies an integer value that denotes the starting address of the buffer from where new buffer to start. Its default value is 0.
& ending_index: It specifies an integer value that denotes ending address of the buffer up to which the new buffer to be created. The default value is the length of the buffer.

^ Return Value: This method returns the cropped array. This buffer points to the same memory but with cropped starting and ending indices. If ending_index in the parameter is greater than buffer length then buffer length is taken as ending index.


TODO :::+++===> Note: If the new buffer is modified then the same will be reflected in the original buffer as they point to the same memory.

*/

// Node.js program to demonstrate the
// Buffer.subarray() method

// Allocating buffer
const buf = Buffer.from("GeeksforGeeks", "ascii");

// Printing original buffer
console.log("Original buffer is: " + buf);

// Cropping buffer, here starting index
// is 5 and ending index is 10
cropped_buf = buf.subarray(5, 10);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

// Modifying cropped buffer
cropped_buf[0] = 70; // F
cropped_buf[1] = 79; // O
cropped_buf[2] = 82; // R

// Printing cropped buffer
console.log("Cropped buffer after modification is: " + cropped_buf);

// Printing original buffer
console.log("Original buffer after modification is: " + buf);

/* 

// Node.js program to demonstrate the 
// Buffer.subarray() method

// Allocating buffer 
const buf = Buffer.from('GeeksforGeeks', 'ascii');

// Printing original buffer
console.log("Original buffer is: " + buf);

// Cropping buffer, here starting index
// is -10 and ending index is -1
cropped_buf = buf.subarray(-12, -1);

// Printing cropped buffer
console.log("Cropped buffer is:" + cropped_buf);

// Cropping buffer again, here starting
// index is -10 and ending index is -5
cropped_buf = buf.subarray(-10, -5);

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

// Cropping buffer again with no parameter
cropped_buf = buf.subarray();

// Printing cropped buffer
console.log("Cropped buffer is: " + cropped_buf);

//!  Output: 
 

//!  Original buffer is: GeeksforGeeks
//! Cropped buffer is:eeksforGeek
//! Cropped buffer is: ksfor
//! Cropped buffer is: GeeksforGeeks


*/

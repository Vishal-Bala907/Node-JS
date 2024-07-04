/*

! Buffer.compare() method compares the two given buffers. 

! Syntax buffer1.compare( targetBuffer, targetStart, targetEnd, sourceStart, sourceEnd )

Parameters: This method accepts five parameters as mentioned above and described below:

? => targetBuffer: This parameter holds the buffer which will be compared with another buffer.
?=> targetStart: It refers to the starting index from which the elements of the target buffer will begin comparing. Its default value is 0.
?=> targetEnd: It refers to the index to which the elements of the target buffer will be compared. The default value is 0.
?=> sourceStart: The index in the input buffer from which the comparing of values will start. The default value is 0.
?=> sourceEnd: The index in input buffer till which the comparing of values will be done. The default value is buffer.length
?=> Return Value: It returns a number indicating the difference in both buffers. The returns number are:

* 0: If they are equal.
* 1: If buffer1 is higher than buffer2 i.e. if buffer1 should come before buffer2 when sorted.
* -1: If buffer2 is higher than buffer1 i.e. if buffer2 should come before buffer1 when sorted

*/

// Node.js program to demonstrate the
// Buffer.compare() Method

// Creating a buffer
const buffer1 = Buffer.from("Geek");
const buffer2 = Buffer.from("Geek");
const op = Buffer.compare(buffer1, buffer2);
console.log(op === 0);

const buffer3 = Buffer.from("GFG");
const buffer4 = Buffer.from("Python");
const op2 = Buffer.compare(buffer3, buffer4);
console.log(op2);

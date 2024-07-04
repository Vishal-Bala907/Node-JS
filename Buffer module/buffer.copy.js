/* the Buffer.copy() method simply copies all the values from the input buffer to another buffer. 

Syntax:

buffer.copy( target, targetStart, sourceStart, sourceEnd )
Parameters: This method accepts two parameters as mentioned above and described below:

! target: ==> It is a buffer in which you need to copy all the values.
! targetStart: ==> It refers to the starting index from which the elements of the target buffer will begin writing. Its default value is 0.
! sourceStart: ==> It is the index of the input buffer from which the copying of values will start. Its default value is 0.
! sourceEnd: ==> The index of input buffer till which the copying of values will be done. Its default value is a buffer.length size.
Return Value: ==> This method returns the number that indicates the number of bytes copied. 

Note: Copies the values from the input buffer and overwrites them to the output buffer even if the target memory regions (indexes) already exist. Copies data from a region of the input buffer to a region in the target buffer even if the target memory region overlaps with the input buffer.

*/

// Node.js program to demonstrate the
// Buffer.copy() Method

// Creating a buffer
let buffer2 = Buffer.from("for");

let buffer1 = Buffer.from("GeeksandGeeks");

buffer2.copy(buffer1, 5, 0);

console.log(buffer1.toString());

// Example 2
// Node.js program to demonstrate the
// Buffer.copy() Method

// let buffer2 = Buffer.allocUnsafe(5);

// let buffer1 = Buffer.from('Geeks');

// for (let i = 0; i < 5; i++) {

// 	// Adds: 'a b c d e' as 97 98 99 100 101
// 	// are their respective ASCII values
// 	buffer2[i] = i + 97;
// }

// buffer2.copy(buffer1, 2);

// // Prints 'Geabc' as the input buffer1
// // carries 'Geeks' and we provided the
// // targetStart index as 2
// // so elements will replace the values in
// // buffer1 starting from index 2

// console.log(buffer1.toString());

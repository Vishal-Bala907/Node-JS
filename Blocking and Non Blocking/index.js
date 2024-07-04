/*
What is Blocking?
It refers to the blocking of further operation until the current operation finishes. Blocking methods are executed synchronously. 
*/

//! =======================================

/*
What is Non-Blocking ?
It refers to the program that does not block the execution of further operations. Non-Blocking methods are executed asynchronously.
*/

import { readFile } from "fs";

const filepath = "text.txt";

// Reads a file in a asynchronous and non-blocking way
readFile(filepath, { encoding: "utf8" }, (err, data) => {
  // Prints the content of file
  console.log(data);
});

// This section calculates the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

// Prints the sum
console.log("Sum: ", sum);

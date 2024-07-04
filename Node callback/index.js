//! A callback in Node is a non-blocking function that executes upon task completion, enabling asynchronous processing. It facilitates scalability by allowing Nodejs to handle multiple requests without waiting for operations to conclude, as exemplified in file I/O scenarios.

//^ Explanation: The fs library is used for file-system operations. The readFileSync() function is synchronous, halting program execution until completion. This blocking behavior ensures that the program reads the file before progressing further.

// Write JavaScript code
const fs = require("fs");
//const { setTimeout } = require("timers/promises");

const filedata = fs.readFileSync("inputfile1.txt");
console.log(filedata.toString());
console.log("End of Program execution");

//?====================================================================================?
//& Explanation: The fs library is utilized for file-system operations. The asynchronous readFile() function allows the program to proceed immediately to the next instruction while the task runs in the background. A callback function is employed to execute upon the completion of the background task.

//& Example 2: Code for reading a file asynchronously (non-blocking code) in Nodejs. Create a text file inputfile1.txt with the following content.

fs.readFile("inputfile1.txt", function (ferr, filedata) {
  if (ferr) return console.error(ferr);

  console.log(filedata.toString());
});
console.log("End of Program execution");

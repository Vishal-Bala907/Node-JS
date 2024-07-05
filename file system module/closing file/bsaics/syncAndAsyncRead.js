var fs = require("fs");

//! Reading file asynchronously
fs.readFile("./file system module/file.txt", function (err, file) {
  if (err) {
    return console.error("no files found");
  }
  console.log("Asynchronous read: " + file.toString());
});

//! Reading file synchronously
var data = fs.readFileSync("./file system module/file.txt");
console.log("Synchronous read: " + data.toString());

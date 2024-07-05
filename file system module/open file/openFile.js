const fs = require("fs");

let path = "./file system module/file.txt";
console.log("opening file");
fs.open(path, "r+", function (err, file) {
  if (err) {
    return console.error(err);
  }
  console.log("file opened successfully");
});

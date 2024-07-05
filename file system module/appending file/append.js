const fs = require("fs");
const path = "./file system module/file.txt";

console.log("Reading old content");
fs.readFile(path, function (err, data) {
  if (err) {
    console.err("err");
  }
  console.log("old content", data.toString());
});

// appending new data
fs.appendFile(path, "\tmy name is vishal bala", "utf-8", function (err, data) {
  if (err) {
    console.err("err");
  }
  console.log("Appended successfully");
});

console.log("Reading appended content");
fs.readFile(path, function (err, data) {
  if (err) {
    console.err("err");
  }
  console.log("old content", data.toString());
});

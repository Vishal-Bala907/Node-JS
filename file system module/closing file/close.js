const fs = require("fs");

const path = "./file system module/file.txt";
const buff = new Buffer.alloc(1024);

// Opeing the file
fs.open(path, "r+", function (err, fd) {
  if (err) {
    console.error(err);
  }
  console.log("File opened successfull");
  console.log("Reading the file");

  // reading the file in the buffer
  fs.read(fd, buff, 0, buff.length, 0, function (err, bytes) {
    if (err) {
      console.error(err);
    }
    console.log("bytes", bytes);
    if (bytes > 0) {
      console.log(buff.slice(0, bytes).toString());
    }
  });

  console.log("Closing the file");
  fs.close(fd, function (err) {
    if (err) {
      console.error(err);
    }
    console.log("file closed");
  });
});

const fs = require("fs");

let path = "./file system module/file.txt";
let buf = new Buffer.alloc(1024);

fs.open(path, "r+", function (err, fd) {
  if (err) {
    console.error(err);
  }
  console.log("file opened successflly\n Reading the file");

  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      console.error(err);
    }
    console.log(bytes, " bytes");
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});

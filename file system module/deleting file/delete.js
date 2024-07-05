const fs = require("fs");
const path = "./file system module/deleting file/file.txt";

fs.writeFile(path, "new file", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("file me likh diya");
  }
});

// now delete the file
fs.unlink(path, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("file delete kardio");
  }
});

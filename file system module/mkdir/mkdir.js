const fs = require("fs");
const path = "./file system module/file.txt";
const DIRPATH = "./file system module/mkdir/NEWDIR";

//! { recursive: true } , this will prevent the error to occuer in case of directory already exists

fs.mkdir(DIRPATH, { recursive: true }, (Err) => {
  if (Err) {
    console.error(Err);
  } else {
    console.log("Directory created successfully");
  }
});

// Alternative way
const path2 = require("path");
fs.mkdir(path2.join(__dirname, "ALT_DIR"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});

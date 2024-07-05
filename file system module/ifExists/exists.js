const fs = require("fs");

const path = "./file system module/file.txt";

fs.exists(path, (exists) => {
  console.log(exists);
});

//* The fs.existsSync() method is used to synchronously check if a file already exists in the given path or not. It returns a boolean value which indicates the presence of a file.
const fs = require("fs");
const path = "./file system module/file.txt";

function getCurrentFileNames() {
  console.log("Current file name\n");
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
  console.log("\n");
}

getCurrentFileNames();

let exists_DOT_js = fs.existsSync(path);
console.log(exists_DOT_js);

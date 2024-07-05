const fs = require("fs");
const path = require("path");

const pathOfFiles = "./file system module/renameSync/";

function getCurrentFileNames() {
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
}

getCurrentFileNames();

console.log("Renaming");
fs.renameSync(pathOfFiles + ".md", pathOfFiles + "README.md");

getCurrentFileNames();

const fs = require("fs");

const path = "./file system module/file.txt";

console.log("Writing into existing file");
fs.writeFile(path, "i feel very lonely", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("Lets read newly written data");
  console.log("Data wtitten successfully");
});
fs.readFile(path, function (err, data) {
  if (err) {
    console.error(err);
  }
  console.log("Asynchronous Read : ", data.toString());
});

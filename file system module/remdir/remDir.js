const fs = require("fs");
const path = require("path");
const pathToRemove = path.join(__dirname + "demo");

// Function to get current filenames
// in directory
function getCurrentFilenames() {
  console.log("\nCurrent filenames:");
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
  console.log("\n");
}

getCurrentFilenames();

// removing dir which does not exists
/* fs.rmdir(path.join(__dirname + "hello"), { recursive: false }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Non Recursive: Directories Deleted!");
  }
});

*/
// creating dir

fs.mkdirSync(path.join(__dirname, "new dir"), { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Directory created");
  }
});

// removing

setTimeout(() => {
  fs.rmdir(path.join(__dirname, "new dir"), { recursive: false }, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Non Recursive: Directories Deleted!");
    }
  });
}, 3000);

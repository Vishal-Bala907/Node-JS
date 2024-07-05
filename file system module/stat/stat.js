const fs = require("fs");

fs.stat(__dirname, (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Stats object for: example_file.txt");
    console.log(stats);

    // Using methods of the Stats object
    console.log("Path is file:", stats.isFile());
    console.log("Path is directory:", stats.isDirectory());
  }
});

fs.stat(__filename, { bigint: true }, (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Stats object for: example_file.txt");
    console.log(stats);

    // Using methods of the Stats object
    console.log("Path is file:", stats.isFile());
    console.log("Path is directory:", stats.isDirectory());
  }
});

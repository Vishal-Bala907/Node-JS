const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("node js");
//     res.end();
//   })
//   .listen(2000);

// make an http request
let options = {
  host: "www.geeksforgeeks.org",
  path: "/courses",
  method: "GET",
};
http.request(options, (response) => {
  console.log(`STATUS : ${response.statusCode}`);
});

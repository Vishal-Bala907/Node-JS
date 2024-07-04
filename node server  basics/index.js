const http = require("http");
const port = 8080;

// creating a server
const server = http.createServer(function (req, res) {
  // Write a response to the client
  res.write("first node js server");
  //end the response
  res.end();
});

server.listen(port, function (error) {
  // Checking any error occur while listening on port
  if (error) {
    console.log("Something went wrong", error);
  }
  // Else sent message of listening
  else {
    console.log("Server is listening on port" + port);
  }
});

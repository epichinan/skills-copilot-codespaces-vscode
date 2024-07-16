// Create web server
// Create a web server that listens on port 3000 and returns the response 'Hello World' for any request

// Create a web server
const http = require('http');

// Create a web server that listens on port 3000 and returns the response 'Hello World' for any request
const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the file in the terminal with the command node comments.js and open a browser at the address http://localhost:3000 to see the response Hello World.
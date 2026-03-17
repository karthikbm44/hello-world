const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Read the HTML file and serve it as the response
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading HTML file');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on [http://localhost:${PORT}](http://localhost:${PORT})`);
});

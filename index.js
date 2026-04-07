const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const currentDate = new Date().toISOString();

  res.end(`Hello this is pwujczyk default appengine. Current Date: ${currentDate}\n`);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Default App Engine service listening on port ${PORT}`);
});

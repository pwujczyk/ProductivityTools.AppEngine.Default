const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  const currentDate = new Date().toISOString();
  
  let ipAddress = 'Unknown';
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    for (const iface of networkInterfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
        break;
      }
    }
    if (ipAddress !== 'Unknown') {
      break;
    }
  }

  res.end(`Current Date: ${currentDate}\nServer IP Address: ${ipAddress}\n`);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Default App Engine service listening on port ${PORT}`);
});

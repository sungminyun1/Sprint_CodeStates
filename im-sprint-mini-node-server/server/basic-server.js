const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {
  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );

  if(request.method === "OPTIONS") {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }

  else if(request.method === "GET") {
    response.writeHead(200, defaultCorsHeader);
    response.end("Hello World");
  }

  else if(request.method === "POST") {

    if(request.url === '/upper') {
      let body = [];
      request.on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        let result = body.toUpperCase();
        response.writeHead(201, defaultCorsHeader);
        response.end(result);
      });
    }

    if(request.url === '/lower') {
      let body = [];
      request.on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        let result = body.toLowerCase();
        response.writeHead(201, defaultCorsHeader);
        response.end(result);
      });
    }

  }

  else {
    response.writeHead(404, defaultCorsHeader);
    response.end("Bad Request");
  }
  
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

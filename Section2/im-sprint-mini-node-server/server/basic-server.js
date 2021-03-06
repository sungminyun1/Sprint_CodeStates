// const http = require('http');

// const PORT = 5000;

// const ip = 'localhost';

// const server = http.createServer((request, response) => {
//   console.log(
//     `http request method is ${request.method}, url is ${request.url}`
//   );

//   // console.log(response.end);
//   // console.log(request);

//   if(request.method === "OPTIONS") {
//     response.writeHead(200, defaultCorsHeader);
//     response.end();
//   }

//   else if(request.method === "GET") {
//     response.writeHead(200, defaultCorsHeader);
//     response.end("Hello World");
//   }

//   else if(request.method === "POST") {

//     if(request.url === '/upper') {
//       let body = [];
//       request.on('data', (chunk) => {
//         console.log(chunk);
//         body.push(chunk);
//       })
//       .on('end', () => {
//         body = Buffer.concat(body).toString();
//         let result = body.toUpperCase();
//         response.writeHead(201, defaultCorsHeader);
//         response.end(result);
//       });
//     }

//     if(request.url === '/lower') {
//       let body = [];
//       request.on('data', (chunk) => {
//         console.log(chunk)
//         body.push(chunk);
//       })
//       .on('end', () => {
//         console.log(Buffer);
//         body = Buffer.concat(body).toString();
//         let result = body.toLowerCase();
//         response.writeHead(201, defaultCorsHeader);
//         response.end(result);
//       });
//     }

//   }

//   else {
//     response.writeHead(404, defaultCorsHeader);
//     response.end("Bad Request");
//   }
  
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };


const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 5000;
const ip = 'localhost';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("Hello World");
});

app.post('/upper', (req, res) => {
  console.log(req.body)
  res.status(201).json(req.body.text.toUpperCase());
});

app.post('/lower', (req, res) => {
  console.log(req.body);
  res.status(201).json(req.body.text.toLowerCase());
});

app.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});
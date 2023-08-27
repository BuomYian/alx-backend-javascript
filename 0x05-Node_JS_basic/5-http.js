const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
  if (req.method === 'GET') {
    const { pathname, query } = url.parse(req.url, true);

    if (pathname === '/') {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end('Hello Holberton School!\n');
    } else if (pathname === '/students') {
      const databaseFile = query.file || 'database.csv';

      countStudents(databaseFile)
        .then((report) => {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.end(`This is the list of our students\n${report}`);
        })
        .catch((err) => {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 500;
          res.end(`Error: ${err.message}\n`);
        });
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 404;
      res.end('Not found\n');
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!\n');
    } else if (pathname === '/students') {
      const query = parsedUrl.query;
      const databaseFile = query.file || 'database.csv';

      res.writeHead(200, { 'Content-Type': 'text/plain' });

      countStudents(databaseFile)
        .then(() => {
          res.end('This is the list of our students\n');
        })
        .catch((error) => {
          res.end(error.message + '\n');
        });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found\n');
    }
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;

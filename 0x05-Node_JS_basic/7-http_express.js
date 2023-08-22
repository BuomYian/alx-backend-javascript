const express = require('express');
const app = express();
const countStudents = require('./3-read_file_async');

const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  const query = req.query;
  const databaseFile = query.file || 'database.csv';

  res.setHeader('Content-Type', 'text/plain');

  countStudents(databaseFile)
    .then(() => {
      res.send('This is the list of our students\n');
    })
    .catch((error) => {
      res.send(error.message + '\n');
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;

const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = req.query.file || 'database.csv';

  countStudents(databaseFile)
    .then((report) => {
      res.send(`This is the list of our students\n${report}`);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;

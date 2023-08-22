const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');

      const students = {};
      const fieldIndex = headers.findIndex(
        (header) => header.trim() === 'field'
      );
      const nameIndex = headers.findIndex(
        (header) => header.trim() === 'firstname'
      );

      if (fieldIndex === -1 || nameIndex === -1) {
        reject(new Error('Invalid CSV format: missing required columns'));
        return;
      }

      lines.slice(1).forEach((line) => {
        const values = line.split(',');
        const fieldName = values[fieldIndex].trim();
        const name = values[nameIndex].trim();

        if (!students[fieldName]) {
          students[fieldName] = [];
        }

        students[fieldName].push(name);
      });

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in students) {
        console.log(
          `Number of students in ${field}: ${
            students[field].length
          }. List: ${students[field].join(', ')}`
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;

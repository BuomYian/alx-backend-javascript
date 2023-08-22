const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const trimmedData = data.trim();
      const lines = trimmedData.split(/\r?\n/);

      if (lines.length === 0) {
        reject(new Error('No valid student data found in the database'));
        return;
      }

      const headers = lines[0].split(',').map((header) => header.trim());

      const fieldIndexMap = {
        firstname: headers.indexOf('firstname'),
        field: headers.indexOf('field'),
      };

      console.log(`Number of students: ${lines.length - 1}`);

      const studentData = lines
        .slice(1)
        .map((line) => line.split(',').map((item) => item.trim()));

      const studentsByField = {};

      studentData.forEach((student) => {
        const field = student[fieldIndexMap.field];
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        if (student[fieldIndexMap.firstname]) {
          studentsByField[field].push(student[fieldIndexMap.firstname]);
        }
      });

      Object.keys(studentsByField).forEach((field) => {
        const studentList = studentsByField[field];
        console.log(
          `Number of students in ${field}: ${
            studentList.length
          }. List: ${studentList.join(', ')}`
        );
      });

      resolve();
    });
  });
}

module.exports = countStudents;

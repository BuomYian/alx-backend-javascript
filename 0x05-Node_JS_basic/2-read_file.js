const fs = require('fs');

function countStudents(path) {
  try {
    if (!fs.existsSync(path)) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(path, 'utf8');
    const trimmedData = data.trim();

    const lines = trimmedData.split(/\r?\n/);

    if (lines.length === 0) {
      throw new Error('No valid student data found in the database');
    }

    const headers = lines[0].split(',').map((header) => header.trim());

    const fieldIndexMap = {
      firstname: headers.indexOf('firstname'),
      lastname: headers.indexOf('lastname'),
      age: headers.indexOf('age'),
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
      if (student[fieldIndexMap.firstname] && student[fieldIndexMap.lastname]) {
        studentsByField[field].push(
          `${student[fieldIndexMap.firstname]} ${
            student[fieldIndexMap.lastname]
          }`
        );
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
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;

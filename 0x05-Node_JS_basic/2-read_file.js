const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
      throw new Error('Cannot load the database');
    }

    const fileContents = fs.readFileSync(dataPath, 'utf-8');
    const lines = fileContents.trim().split('\n');

    const headers = lines[0].split(',').map((header) => header.trim());
    const studentFields = headers.slice(0, -1);

    const studentsByField = {};
    lines.slice(1).forEach((line) => {
      const studentData = line.split(',').map((item) => item.trim());
      const field = studentData.pop();

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      const studentName = studentData.slice(0, 2).join(' ');
      studentsByField[field].push(studentName);
    });

    console.log(`Number of students: ${lines.length - 1}`);
    studentFields.forEach((field) => {
      const studentList = studentsByField[field] || [];
      console.log(
        `Number of students in ${field}: ${
          studentList.length
        }. List: ${studentList.join(', ')}`
      );
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = countStudents;

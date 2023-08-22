const fs = require('fs');

function countStudents(path) {
  try {
    const database = fs.readFileSync(path, 'utf8');
    const lines = database.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('No valid student data found in the database');
    }

    const fields = lines[0].split(',').map((field) => field.trim());

    console.log(`Number of students: ${lines.length - 1}`);

    fields.forEach((field) => {
      if (field !== 'firstname' && field !== 'lastname' && field !== 'age') {
        const studentsInField = lines
          .slice(1)
          .map((line) => line.split(',')[fields.indexOf(field)].trim());
        const validStudents = studentsInField.filter(
          (student) => student !== ''
        );

        console.log(
          `Number of students in ${field}: ${
            validStudents.length
          }. List: ${validStudents.join(', ')}`
        );
      }
    });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;

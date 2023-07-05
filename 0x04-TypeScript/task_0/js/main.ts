interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Andrew',
  lastName: 'Ngamu',
  age: 22,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Beta',
  lastName: 'Hassan',
  age: 20,
  location: 'Mombasa',
};

const studentList: Student[] = [student1, student2];

// Render the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

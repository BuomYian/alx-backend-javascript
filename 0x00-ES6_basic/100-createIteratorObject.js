export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employees = allEmployees[currentDepartment];

      if (currentEmployeeIndex >= employees.length) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const currentEmployee = employees[currentEmployeeIndex];
      currentEmployeeIndex += 1;

      return { value: currentEmployee, done: false };
    },
  };
}

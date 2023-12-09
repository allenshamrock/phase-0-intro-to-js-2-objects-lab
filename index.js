// Write your solution in this file!
const employee = {
  name: "Allen",
  streetAddress: "Donholm",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

//updateEmployeeWithKeyAndValue(employee, "name", "Martin");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  // console.log(employee)
  return employee;
}

// destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Shamrock");

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };

  delete newEmployee[key];
  // console.log(newEmployee)
  return newEmployee;
}

// deleteFromEmployeeByKey(employee , 'name')

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  // console.log(employee)
  return employee;
}

// destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')

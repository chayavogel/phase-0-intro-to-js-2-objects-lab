// Write your solution in this file!
const employee = {
    name: "Chaya Vogel",
    streetAddress: "440 Brooklyn Ave",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {
        ...object,
        [key]: value,
    };
    return newEmployee;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

 function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
 }

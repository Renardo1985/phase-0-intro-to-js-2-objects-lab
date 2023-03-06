// Write your solution in this file!
const employee = {name:"",address:""};

function updateEmployeeWithKeyAndValue(employee, key, value)
{
  return {...employee,[key] :value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key)
{
    const emp2 = {...employee};
    delete emp2[key];
    return emp2;
}
function  destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}
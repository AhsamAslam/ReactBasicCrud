import React, { useState } from "react";
import employeeList from "./data.js";
import EmployeeTable from "./Tables/EmployeeTable.js";
import AddEmployeeForm from "./Forms/AddEmployeeForm.js";
import EditEmployeeForm from "./Forms/EditEmployeeForm.js";
const App = () => {
  const [employees, setEmployees] = useState(employeeList);

  // addEmployee function puts an object containing a new user into our employees array of user objects. We do this by using our setEmployees from useState function.
  const addEmployee = (employee) => {
    employee.id = employees.length + 1;
    setEmployees([...employees, employee]);
  };

  // We will just filter over our employees array and filter out the user which has the ID of the user we want to delete. Again we will use our setEmployees function to update the new employees state.
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((user) => user.id !== id));
  };

  const initialEmployee = { id: null, name: "", designation: "" };
  const [currentEmployee, setCurrentEmployee] = useState(initialEmployee);

  const [editing, setEditing] = useState(false);

  const editEmployee = (id, employee) => {
    setEditing(true);
    setCurrentEmployee(employee);
  };
  const updateEmployee = (newEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === currentEmployee.id ? newEmployee : employee
      )
    );
  };

  return (
    <div className="container">
      <h1>Emplyee Data</h1>
      <div className="row">
        <div className="col-md-6">
          {editing ? (
            <div>
              <h2>Edit Employee</h2>
              <EditEmployeeForm
                currentEmployee={currentEmployee}
                setEditing={setEditing}
                updateEmployee={updateEmployee}
              />
            </div>
          ) : (
            <div>
              <h2>Add Employee</h2>
              <AddEmployeeForm addEmployee={addEmployee} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h2>View Employee</h2>
          <EmployeeTable
            employees={employees}
            deleteEmployee={deleteEmployee}
            editEmployee={editEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";

const EmployeeTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length > 0 ? (
          props.employees.map((employee, i) => {
            const { id, name, designation } = employee;
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{designation}</td>
                <td>
                  {/* Deleting and Editing user */}
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteEmployee(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => props.editEmployee(id, employee)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No employee found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

import React, { useState } from "react";

const AddEmployeeForm = (props) => {
  const initialEmployee = { id: null, name: "", designation: "" };

  const [employee, setEmployee] = useState(initialEmployee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.designation) {
      handleChange(e, props.addEmployee(employee));
    }
    setEmployee(initialEmployee);
  };

  return (
    <form>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={employee.name}
        name="name"
        onChange={handleChange}
      />
      <label>Designation</label>
      <input
        className="u-full-width"
        type="text"
        value={employee.designation}
        name="designation"
        onChange={handleChange}
      />
      <button
        className="btn btn-primary btn-lg"
        type="submit"
        onClick={handleSubmit}
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;

import React, { useState } from "react";

const EdiTEmployeeForm = (props) => {
  const [employee, setEmployee] = useState(props.currentEmployee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.designation) props.updateEmployee(employee);
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
      <button className="btn btn-warning" type="submit" onClick={handleSubmit}>
        Edit user
      </button>
      <button
        className="btn btn-secondary"
        type="submit"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
};

export default EdiTEmployeeForm;

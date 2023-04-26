import React from "react";
export default function TableField({ data = [], handleDelete = (name) => {} }) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((students, index) => (
            <tr key={`datatable-students-table-row-${index}`}>
              <th scope="row">{index + 1}</th>
              <td>{students.studentName}</td>
              <td>{students.studentEmail}</td>
              <td>{students.studentPhonenumber}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(students.studentName)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <h3 className="alignment">No Students found</h3>
        )}
      </tbody>
    </table>
  );
}

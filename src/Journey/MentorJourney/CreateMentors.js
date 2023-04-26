import React, { useState } from "react";

import FormField from "../Component/FormField";
import TableField from "../DataTable/TableField";

function CreateMentors() {
  const [detail, setDetail] = useState([]);
  const [mentors, setMentors] = useState({
    studentName: "",
    studentEmail: "",
    studentPhonenumber: "",
  });

  function handleInput(e) {
    const { id, value } = e.target;
    let mentorsDataCopy = {
      ...mentors,
    };
    if (value < 0) {
      console.log("Enter the Details");
    } else {
      mentorsDataCopy[id] = value;
    }
    setMentors(mentorsDataCopy);
  }

  function handleAddmentors(e) {
    if (e) {
      let detailCopy = [...detail];
      detailCopy.push(mentors);
      setDetail(detailCopy);
    }
  }
  function handleDelete(name = "") {
    let detailDataCopy = [...detail];
    detailDataCopy = detailDataCopy.filter(
      (mentors) => mentors.studentName !== name
    );
    setDetail(detailDataCopy);
  }

  return (
    <div className="student-content-page">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Mentor
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Mentor Details in the table
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <FormField
                id="studentName"
                label="Mentor Name"
                type="text"
                placeholder="Enter the Name"
                onChange={handleInput}
              />
              <FormField
                id="studentEmail"
                label="Mentor Email"
                type="email"
                placeholder="eg:sample@sample.com "
                onChange={handleInput}
              />
              <FormField
                id="studentPhonenumber"
                label="Phone Number"
                type="number"
                placeholder="eg:+91 *****-99999"
                onChange={handleInput}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleAddmentors}
              >
                Add Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-form">
        <TableField data={detail} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
export default CreateMentors;

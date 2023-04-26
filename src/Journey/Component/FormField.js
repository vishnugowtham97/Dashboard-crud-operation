import React from "react";
export default function FormField({
  id = "",
  label = "",
  type = "",
  placeholder = "",
  onChange = (e) => {},
}) {
  return (
    <div>
      <div class="mb-3">
        <label for={id} class="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

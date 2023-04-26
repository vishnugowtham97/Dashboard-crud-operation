import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Index() {
  return (
    <div>
      <div className="landing-page-heading">
        <h1> Mentor Landing Page</h1>
        <div className="option-alignment">
          <Link to="/mentors/create">
            <h3>Create Mentors</h3>click here to add details
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

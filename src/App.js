import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateStudent from "./Journey/StudentJourney/CreateStudent";
import StudentJourney from "./Journey/StudentJourney/index";
import CreateMentors from "./Journey/MentorJourney/CreateMentors";
import MentorJourney from "./Journey/MentorJourney/index";

function App() {
  return (
    <div id="main-page-container" className="app-container">
      <div
        className="main-page-content-container"
        id="main-page-content-container"
      >
        <div className="side-bar-area">
          <div>
            <img
              className="brand-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPE4oxjG9QwPzJ1NAvV_id_gpLeB8V89uYA&usqp=CAU"
              alt="main-page-brand-logo"
            />
          </div>
          <br />
          <nav className="nav-bar-jouney" id="nav-bar-jouney">
            <ul>
              <li>
                <Link to="/students" className="link-no-underline">
                  Student Journey
                </Link>
              </li>
              <br />
              <li>
                <Link to="/mentors" className="link-no-underline">
                  Mentor Journey
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="content-side-area" className="content-side-area">
          <div id="main-page-header-bar" className="main-page-header">
            <div className="para-text">Dashboard</div>
          </div>
          <h4 className="heading tag">WELCOME TO THE ZEN CLASS DASHBOARD</h4>
          <h5 className="heading1 tag">
            Click the Student journey and Mentor jouney to add the list
          </h5>
          <hr />
          <Routes>
            <Route path="students" Component={StudentJourney}>
              <Route path="create" Component={CreateStudent} />
            </Route>
            <Route path="mentors" Component={MentorJourney}>
              <Route path="create" Component={CreateMentors} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;

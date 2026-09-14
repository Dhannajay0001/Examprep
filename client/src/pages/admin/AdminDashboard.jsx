import React from "react";

import "./AdminDashboard.css"
import { Outlet ,Link} from "react-router";


function AdminDashboard() {
  return (
    <>
    <outer>
      <div class="niv">
        <ul>
          <p>Welcome Admin👋</p>
        </ul>
      </div>
      <div class="main">
        <div class="col1">
          <ul>
            <li>
              <a href= "/adminDashboard/session">Session</a>
            </li>

            <li>
              <a href="/adminDashboard/subject">Subject</a>
            </li>
            <li>
              <a href="/adminDashboard/examinee">Examine</a>
            </li>
            <li>
              <a href="/adminDashboard/examination"> Examination</a>
            </li>
            <li>
              <a href="/adminDashboard/question"> Question Bank</a>
            </li>
            <li>
              <a href="/adminDashboard/reportgeneration">Report Generation</a>
            </li>
            <li>
              <a href="/adminDashboard/adminchangepassword">Change Password</a>
            </li>
            <li>
              <a href="/adminDashboard/messagereply">Message Reply</a>
            </li>
            <li>
              <a href="/adminDashboard/logout">Logout</a>
            </li>
          </ul>
        </div>
        <div class="col2">
            <Outlet/>
        </div>
      </div>
    </outer>
  </>
  );
}


export default AdminDashboard

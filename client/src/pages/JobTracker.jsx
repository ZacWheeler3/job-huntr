import React, { useState } from "react";

const JobTracker = () => {
  return (
    <div className="page-container">
      <h3 className="page-header">Job Tracker</h3>
      <table className="jobs">
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Date Applied</th>
          <th>Responded</th>
          <th>Interview</th>
          <th>Follow Up</th>
          <th>Job Offer</th>
        </tr>
        <tr>
        <td>COMPANY NAME</td>
          <td>JOB POSITION</td>
          <td>DATE</td>
          <td><input className="checkbox" type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
        <td>COMPANY NAME</td>
          <td>JOB POSITION</td>
          <td>DATE</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
        <td>COMPANY NAME</td>
          <td>JOB POSITION</td>
          <td>DATE</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
        <td>COMPANY NAME</td>
          <td>JOB POSITION</td>
          <td>DATE</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>COMPANY NAME</td>
          <td>JOB POSITION</td>
          <td>DATE</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
      </table>
    </div>
  );
};

export default JobTracker;

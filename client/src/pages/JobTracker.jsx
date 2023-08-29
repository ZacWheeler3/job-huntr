import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Job from "../components/Job";
import UserTermsForm from "../components/UserTermsForm";
import JobForm from "../components/JobForm";
import UpdateJobForm from "../components/UpdateJobForm";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { DELETE_JOB } from "../utils/mutations";


import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const [selectedJobId, setSelectedJobId] = useState(null);
  const [updatedJobId, setUpdatedJobId] = useState(null);
  const [showJobForm, setShowJobForm] = useState(false);

  const [deleteJob] = useMutation(DELETE_JOB);


  const handleJobDelete = (jobId) => {
    deleteJob({ variables: { _id: jobId } })
  }

  const handleJobUpdate = (jobId) => {
    setUpdatedJobId(jobId);
  };

  const handleJobClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4 className="profile-h4">
        You need to be <span>logged in</span> to see this. Use the navigation
        links above to
        <span>&nbsp;sign up&nbsp;</span>or <span>log in</span>!
      </h4>
    );
  }

  return (
    <div>
      <div className="profile-view-container">
        <h2 className="profile-view-header">
          {userParam ? `${user.username}'s` : "Your"} Jobs
        </h2>

        <div className="profile-section">
          {/* <p
            className="username-display"
            style={{ textTransform: "capitalize" }}
          >
            {user.username.charAt(0).toUpperCase() + user.username.slice(1)}{" "}
          </p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p> */}
          <ul>
            {user.savedJobs.map((job, index) => {
              return (
                <li key={index} className="job-item">
                  <span>Company:</span> {job.company}, <span>Role:</span>{" "}
                  {job.role}, <span>Salary:</span> {job.advertisedSalary}{" "}
                  <span>Offer made?</span> {job.offerMade}
                  <button
                    className="job-update-button"
                    onClick={() => handleJobUpdate(job._id)}
                    style={{}}
                  >
                    Update This Job
                  </button>
                  <button
                    className="job-delete-button"
                    onClick={() => handleJobDelete(job._id)}
                    style={{}}
                  >
                    Delete This Job
                  </button>
                  <button
                    className="job-expand-button"
                    onClick={() => handleJobClick(job._id)}
                    style={{}}
                  >
                    Expand
                  </button>
                  <button type="button" className="job-collapse-button">
                    Collapse
                  </button>
                  <div class="content"></div>
                </li>
              );
            })}
          </ul>
          {selectedJobId && <Job jobId={selectedJobId} />}
          console.log{updatedJobId}
          {updatedJobId && <UpdateJobForm jobId={updatedJobId} />}
        </div>
        <div>
          {/* TO DO: style the button below and change className */}

          <button className="add-question" onClick={() => setShowJobForm(true)}>
            Add Job
          </button>
          {showJobForm && <JobForm />}
        </div>
        <div>
          <UserTermsForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;

// const JobTracker = () => {
//   return (
//     <div className="page-container">
//       <h3 className="page-header">Job Tracker</h3>
//       <table className="jobs">
//         <tr>
//           <th>Company</th>
//           <th>Position</th>
//           <th>Date Applied</th>
//           <th>Responded</th>
//           <th>Interview</th>
//           <th>Follow Up</th>
//           <th>Job Offer</th>
//         </tr>
//         <tr>
//         <td>COMPANY NAME</td>
//           <td>JOB POSITION</td>
//           <td>DATE</td>
//           <td><input className="checkbox" type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//         </tr>
//         <tr>
//         <td>COMPANY NAME</td>
//           <td>JOB POSITION</td>
//           <td>DATE</td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//         </tr>
//         <tr>
//         <td>COMPANY NAME</td>
//           <td>JOB POSITION</td>
//           <td>DATE</td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//         </tr>
//         <tr>
//         <td>COMPANY NAME</td>
//           <td>JOB POSITION</td>
//           <td>DATE</td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//         </tr>
//         <tr>
//           <td>COMPANY NAME</td>
//           <td>JOB POSITION</td>
//           <td>DATE</td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//           <td><input type="checkbox" /></td>
//         </tr>
//       </table>
//       <button className="add-question">Add Job</button>
//     </div>
//   );
// };

// export defalt JobTracker;

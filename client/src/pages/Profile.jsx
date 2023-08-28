import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import Job from "../components/Job";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleJobClick = (jobId) => {
    setSelectedJobId(jobId);
  };
  // navigate to personal profile page if username is yours
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
          Viewing {userParam ? `${user.username}'s` : "your"} profile
        </h2>

        <div className="profile-section">
          <p style={{textTransform: 'capitalize' }}>{user.username.charAt(0).toUpperCase() + user.username.slice(1)}</p>
          <p >{user.firstName}</p>
          <p>{user.lastName}</p>
          <ul>
            {user.savedJobs.map((job, index) => {
              let contactInfo = null;
              if (job.contactPerson) {
                contactInfo = (
                  <>
                    <div className="job-details">
                      <ul>
                        <li> Contact Person Name: {job.contactPerson.name}</li>
                        <li>Contact Person Role: {job.contactPerson.role}</li>
                        <li>
                          {" "}
                          Contact Person Phone: {job.contactPerson.phone}
                        </li>{" "}
                        <li>
                          Contact Person Email: {job.contactPerson.email}{" "}
                        </li>
                        <li>Contact Person Notes: {job.contactPerson.notes}</li>
                      </ul>
                    </div>
                  </>
                );
              }
              console.log(contactInfo);
              return (
                <li key={index}>
                  Company: {job.company}, Role: {job.role}, Salary:{" "}
                  {job.advertisedSalary}
                  Offer made? {job.offerMade} {contactInfo}
                  <button
                    className="job-expand-button"
                    onClick={() => handleJobClick(job._id)}
                    style={{}}
                  >
                    Expand
                  </button>
                  <button type="button" class="collapsible">
                    Collapse
                  </button>
                  <div class="content"></div>
                </li>
              );
            })}
          </ul>
          {selectedJobId && <Job jobId={selectedJobId} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;

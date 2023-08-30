import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import formatTimestamp from "../utils/date"; 
import JobForm from "../components/JobForm";
import { useState } from "react";

import Auth from "../utils/auth";




const JobTracker = () => {
  const [addButton, setAddButton] = useState(false);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

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
    <div className="page-container">
      <h3 className="page-header">Viewing {userParam ? `${user.username}'s` : "your"} saved jobs</h3>
      <table className="jobs">
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Date Applied</th>
          <th>Job Offer</th>
        </tr>
        {user.savedJobs.map((job, index) => {
        return (
        <tr key={index}>
        <td>{job.company}</td>
          <td>{job.role}</td>
          <td>{formatTimestamp(job.createdAt)}</td>
          <td><input className="checkbox" type="checkbox" /></td>
        </tr>);
        })},
        
        
      </table>
      <button className="add-question" onClick={() => setAddButton(!addButton)}>Add A Job</button>
      {addButton && <JobForm />}

    </div>
  );
};

export default JobTracker;



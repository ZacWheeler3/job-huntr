import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import formatTimestamp from "../utils/date"; 

import Auth from "../utils/auth";

const JobTracker = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="page-container">
      <h3 className="page-header">Job Tracker</h3>
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
      <button className="add-question">Add Job</button>
    </div>
  );
};

export default JobTracker;



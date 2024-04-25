import React from "react";
import "./styles/MyJobs.css";
import myJobData from "./data/my-jobs.js";

const MyJobCard = ({ myJob }) => {
  return (
    <li>
      <div className="job">
        <div className="job-container">
          <div className="job-info">
            <h2>{myJob.job_name}</h2>
            <p>
              <strong>Type:</strong> {myJob.job_type}
            </p>
            <p>
              <strong>Description:</strong> {myJob.job_description}
            </p>
            <p>
              <strong>Salary:</strong> {`$${myJob.job_salary}`}
            </p>
          </div>
          <div className="buttons">
            <button className="edit-button">Edit</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export const MyJobs = () => {
  return (
    <div className="my-jobs-container">
      <h1 className="my-job-heading">Job Listings</h1>
      <div className="my-jobs-list-container">
        <ul id="job-list">
          {myJobData.map((myJob, index) => (
            <MyJobCard key={index} myJob={myJob} />
          ))}
        </ul>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import "./styles/MyJobs.scss";
import { deleteJob, fetchJobsEmployer } from "./api.js";
import { useNavigate } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE } from "./Constants.jsx";
import { toast } from "react-toastify";

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
              <strong>Salary:</strong> {`${myJob.job_salary} INR`}
            </p>
          </div>
          <div className="buttons">
            <a
              href={`/my-jobs/edit?id=${encodeURIComponent(myJob.pk)}`}
              className="edit-button"
            >
              Edit
            </a>
            <a onClick={() => deleteJob(myJob.pk)} className="delete-button">
              Delete
            </a>
            <a
              href={`/my-jobs/applications?id=${encodeURIComponent(myJob.pk)}`}
              className="view-application-button"
            >
              Applications
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export const MyJobs = () => {
  const [myJobData, setmyJobData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!JWT_COOKIE) {
          navigate("/login");
        }
        const data = await fetchJobsEmployer();
        setmyJobData(data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    fetchData();
  }, []);

  if (lodash.isEmpty(myJobData)) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

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

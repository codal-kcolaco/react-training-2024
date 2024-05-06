import React, { useState, useEffect } from "react";
import "./styles/MyJobs.scss";
import { deleteJob, fetchJobsEmployer } from "./api.js";
import { Link, useNavigate } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE } from "./Constants.jsx";
import { toast } from "react-toastify";
import noJobLogo from "./assets/people.png";
import { myJobsContent } from "./data/MyJobsContent.js";

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
              <strong>Salary:</strong> {`${myJob.job_salary} INR`}
            </p>
          </div>
          <div className="buttons">
            <Link
              to={`/my-jobs/edit/${encodeURIComponent(myJob.pk)}`}
              className="edit-button"
            >
              Edit
            </Link>
            <a onClick={() => deleteJob(myJob.pk)} className="delete-button">
              Delete
            </a>
            <Link
              to={`/my-jobs/applications/${encodeURIComponent(myJob.pk)}`}
              className="view-application-button"
            >
              Applications
            </Link>
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
    const fetchData = () => {
      if (!JWT_COOKIE) {
        navigate("/login");
        return;
      }

      fetchJobsEmployer()
        .then((data) => {
          setmyJobData(data);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="my-jobs-container">
      <h1 className="my-job-heading">{myJobsContent.myJobHeading}</h1>
      <div className="my-jobs-list-container">
        {!lodash.isEmpty(myJobData) ? (
          <ul id="job-list">
            {myJobData.map((myJob, index) => (
              <MyJobCard key={index} myJob={myJob} />
            ))}
          </ul>
        ) : (
          <div className="empty-list-container">
            <img className="empty-list-img" src={noJobLogo} alt="people" />
            <p className="empty-list-message">
              {myJobsContent.myJobEmptyMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

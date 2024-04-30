import React, { useState, useEffect } from "react";
import "./styles/ViewApplicationsEmployers.scss";
import {
  deleteJob,
  fetchJobApplicationsEmployer,
  fetchJobsEmployer,
} from "./api.js";
import { useNavigate } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE } from "./Constants.jsx";
import { toast } from "react-toastify";
import noJobLogo from "./assets/people.png";

const JobApplicationEmployerCard = ({ jobApplication }) => {
  return (
    <li>
      <div className="application">
        <div className="application-container">
          <div className="application-info">
            <h2>{jobApplication.applicant}</h2>
            <p>
              <strong>Applied at:</strong> {jobApplication.applied_at}
            </p>
            <p>
              <strong>Cover letter:</strong> {jobApplication.cover_letter}
            </p>
            <p>
              <strong>For:</strong> {jobApplication.job_title}
            </p>
          </div>
          <div className="buttons">
            <a className="accept-button">Accept</a>
            <a
              onClick={() => deleteJob(jobApplication.pk)}
              className="reject-button"
            >
              Reject
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export const ViewApplicationsEmployers = () => {
  const [jobApplication, setJobApplication] = useState({});
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);

  const jobId = urlParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!JWT_COOKIE) {
          navigate("/login");
        }
        const data = await fetchJobApplicationsEmployer(jobId);

        setJobApplication(data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    fetchData();
  }, []);

  return !lodash.isEmpty(jobApplication) ? (
    <div className="job-application-employer-container">
      <h1 className="job-application-employer-heading">Job Applications</h1>
      <div className="job-application-employer-list-container">
        <ul id="job-application-employer-list">
          {jobApplication.map((jobApplication, index) => (
            <JobApplicationEmployerCard
              key={index}
              jobApplication={jobApplication}
            />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="job-application-employer-container">
      <h1 className="job-application-employer-heading">Job Applications</h1>
      <div className="job-application-employer-list-container">
        <img
          className="job-application-employer-list-img"
          src={noJobLogo}
          alt="people"
        />
        <p className="job-application-employer-list-message">
          No job applications
        </p>
      </div>
    </div>
  );
};

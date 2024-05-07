import React, { useState, useEffect } from "react";
import "./ViewApplicationsEmployers.scss";
import {
  fetchJobApplicationsEmployer,
  selectApplicantAPI,
} from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE } from "../../Constants.jsx";
import { toast } from "react-toastify";
import noJobLogo from "../../assets/people.png";
import { viewApplicationEmployersInfo } from "../../data/ViewApplicationsEmployers.js";

const JobApplicationEmployerCard = ({ jobApplication }) => {
  const [isSelected, setIsSelected] = useState(jobApplication.is_selected);

  const selectApplicant = (status) => {
    setIsSelected(status);
    selectApplicantAPI(jobApplication.job, jobApplication.pk, status);
  };

  return (
    <li>
      <div className="application">
        <div className="application-container">
          <div className="application-info">
            <h2>{jobApplication.applicant}</h2>
            <p>
              <strong>{viewApplicationEmployersInfo.appliedAt}</strong>{" "}
              {jobApplication.applied_at}
            </p>
            <p>
              <strong>{viewApplicationEmployersInfo.coverLetter}</strong>{" "}
              {jobApplication.cover_letter}
            </p>
            <p>
              <strong>{viewApplicationEmployersInfo.for}</strong>{" "}
              {jobApplication.job_title}
            </p>
          </div>
          {isSelected === "PENDING" && (
            <div className="view-application-employers-buttons">
              <button
                className="accept-button"
                onClick={() => selectApplicant("ACCEPTED")}
              >
                {viewApplicationEmployersInfo.acceptMessage}
              </button>
              <button
                className="reject-button"
                onClick={() => selectApplicant("REJECTED")}
              >
                {viewApplicationEmployersInfo.rejectMessage}
              </button>
            </div>
          )}
          <div
            className="job-application-button-confirm-container"
            style={{
              display: isSelected !== "PENDING" ? "flex" : "none",
              backgroundColor: isSelected === "ACCEPTED" ? "green" : "red",
            }}
          >
            {isSelected}
          </div>
        </div>
      </div>
    </li>
  );
};

export const ViewApplicationsEmployers = () => {
  const [jobApplication, setJobApplication] = useState({});
  const navigate = useNavigate();
  const jobId = useParams().id;

  useEffect(() => {
    const fetchData = () => {
      if (!JWT_COOKIE) {
        navigate("/login");
        return;
      }

      fetchJobApplicationsEmployer(jobId)
        .then((data) => {
          setJobApplication(data);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="job-application-employer-container">
      <h1 className="job-application-employer-heading">
        {viewApplicationEmployersInfo.jobApplicationHeading}
      </h1>
      <div className="job-application-employer-list-container">
        {!lodash.isEmpty(jobApplication) ? (
          <ul id="job-application-employer-list">
            {jobApplication.map((jobApplication, index) => (
              <JobApplicationEmployerCard
                key={index}
                jobApplication={jobApplication}
              />
            ))}
          </ul>
        ) : (
          <div className="empty-list-container">
            <img className="empty-list-img" src={noJobLogo} alt="people" />
            <p className="empty-list-message">
              {viewApplicationEmployersInfo.jobApplicationEmptyMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

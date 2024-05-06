import React, { useState, useEffect } from "react";
import "./styles/JobDescription.scss";
import { applyStatusForJob, fetchSingleJob } from "./api";
import lodash from "lodash";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {
  jobDescriptionError,
  jobDescriptionContent,
} from "./data/JobDescriptionContent";

const JobDescriptionCard = () => {
  const jobId = useParams().id;

  const [jobData, setJobData] = useState({});
  const [coverLetter, setCoverLetter] = useState("");
  const [buttonStatus, setButtonStatus] = useState(
    "job-description-apply-button"
  );
  const [buttonText, setButtonText] = useState("Apply Now");

  useEffect(() => {
    const fetchData = () => {
      fetchSingleJob(jobId)
        .then((data) => {
          setJobData(data);
        })
        .catch((error) => {
          alert(`${error}. ${jobDescriptionError}`);
        });
    };

    fetchData();
  }, []);

  if (lodash.isEmpty(jobData)) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="job-description-card" id="job-description-card">
        <div className="job-description-title-container">
          <h1>{jobData.job_name}</h1>
          <h1>({jobData.job_technology})</h1>
        </div>
        <div className="job-employer-detail">
          <h3>{jobData.user.name}</h3>
          <p>
            {jobData.job_salary} INR | {jobData.job_location} |{" "}
            {jobData.job_type}
          </p>
          <p>
            {jobData.job_experience} {jobDescriptionContent.jobExperience}
          </p>
        </div>

        <div className="job-description-info-container">
          <h3 className="job-description-info-title">
            {jobDescriptionContent.jobDescriptionTitle}
          </h3>
          <p className="job-description-info-para">{jobData.job_description}</p>
        </div>
      </div>
      <div className="job-description-apply">
        <h1 className="job-description-apply-title">
          {jobDescriptionContent.jobDescriptionApplyTitle}
        </h1>
        <input
          className="job-description-apply-input"
          type="text"
          name="coverLetter"
          value={coverLetter}
          onChange={(e) => {
            setCoverLetter(e.target.value);
          }}
        />
        <button
          onClick={() => {
            applyStatusForJob(jobId, coverLetter)
              .then(() => {
                setButtonStatus("job-description-applied-button");
                setButtonText("Applied");
              })
              .catch((error) => {
                toast.error(`${error}`);
              });
          }}
          className={buttonStatus}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export const JobDescription = () => {
  return (
    <div className="job-description-container">
      <JobDescriptionCard />
    </div>
  );
};

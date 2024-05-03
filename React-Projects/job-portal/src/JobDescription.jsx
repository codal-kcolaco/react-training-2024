import React, { useState, useEffect } from "react";
import "./styles/JobDescription.scss";
import { applyStatusForJob, fetchSingleJob } from "./api";
import lodash from "lodash";
import { toast } from "react-toastify";

const JobDescriptionCard = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");

  const [jobData, setJobData] = useState({});
  const [coverLetter, setCoverLetter] = useState("");
  const [buttonStatus, setButtonStatus] = useState(
    "job-description-apply-button"
  );
  const [buttonText, setButtonText] = useState("Apply Now");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleJob(jobId);
        setJobData(data);
      } catch (error) {
        alert(`${error}. Please try again.`);
      }
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
          <div className="job-description-details">
            <h1>{jobData.job_name}</h1>
            <h3>({jobData.job_type})</h3>
          </div>
        </div>
        <div className="job-description-overview">
          <strong>About {jobData.job_name}</strong>
          <p>{jobData.job_description}</p>
          {/* <p>
          <strong>Location:</strong> {jobData.location}
        </p> */}
          <p>
            <strong>Employer:</strong>
            {jobData.user.name}
          </p>
        </div>
      </div>
      <div className="job-description-apply">
        <h1 className="job-description-apply-title">Cover Letter</h1>
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
          onClick={async () => {
            setButtonStatus("job-description-applied-button");
            setButtonText("Applied");
            try {
              await applyStatusForJob(jobId, coverLetter);
              toast.success("Applied successfully!");
            } catch (error) {
              toast.error(`${error}`);
            }
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

import React, { useState, useEffect } from "react";
import styles from "./JobDescription.module.scss";
import { applyStatusForJob, fetchSingleJob } from "../../api/api";
import lodash from "lodash";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {
  jobDescriptionError,
  jobDescriptionContent,
} from "../../data/JobDescriptionContent";

const JobDescriptionCard = () => {
  const jobId = useParams().id;

  const [jobData, setJobData] = useState({});
  const [coverLetter, setCoverLetter] = useState("");
  const [buttonStatus, setButtonStatus] = useState(styles["apply-button"]);
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
      <div className={styles["loading-spinner-container"]}>
        <div className={styles["loading-spinner"]}></div>
      </div>
    );
  }

  return (
    <>
      <div className={styles["card"]} id="card">
        <div className={styles["title-container"]}>
          <h1>{jobData.job_name}</h1>
          <h1>({jobData.job_technology})</h1>
        </div>
        <div className={styles["job-employer-detail"]}>
          <h3>{jobData.user.name}</h3>
          <p>
            {jobData.job_salary} INR | {jobData.job_location} |{" "}
            {jobData.job_type}
          </p>
          <p>
            {jobData.job_experience} {jobDescriptionContent.jobExperience}
          </p>
        </div>

        <div className={styles["info-container"]}>
          <h3 className={styles["info-title"]}>
            {jobDescriptionContent.jobDescriptionTitle}
          </h3>
          <p className={styles["info-para"]}>{jobData.job_description}</p>
        </div>
      </div>
      <div className={styles["apply"]}>
        <h1 className={styles["apply-title"]}>
          {jobDescriptionContent.jobDescriptionApplyTitle}
        </h1>
        <input
          className={styles["apply-input"]}
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
                setButtonStatus(styles["applied-button"]);
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
    <div className={styles["container"]}>
      <JobDescriptionCard />
    </div>
  );
};

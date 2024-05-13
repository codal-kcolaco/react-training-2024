import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./JobDescription.module.scss";
import { applyStatusForJob, fetchSingleJob } from "../../api/api";
import lodash from "lodash";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  jobDescriptionError,
  jobDescriptionContent,
} from "../../data/JobDescriptionContent";

const JobDescriptionCard = () => {
  const jobId = useParams().id;
  const userType = useSelector((state) => state.userType);
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({});
  const [coverLetter, setCoverLetter] = useState("");
  const [buttonStatus, setButtonStatus] = useState(styles["applyButton"]);
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
      <div className={styles.loadingSpinnerContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.card} id="card">
        <div className={styles.titleContainer}>
          <h1>{jobData.job_name}</h1>
          <h1>({jobData.job_technology})</h1>
        </div>
        <div className={styles.jobEmployerDetail}>
          <h3>{jobData.user.name}</h3>
          <p>
            {jobData.job_salary} INR | {jobData.job_location} |{" "}
            {jobData.job_type}
          </p>
          <p>
            {jobData.job_experience} {jobDescriptionContent.jobExperience}
          </p>
        </div>

        <div className={styles.infoContainer}>
          <h3 className={styles.infoTitle}>
            {jobDescriptionContent.jobDescriptionTitle}
          </h3>
          <p className={styles.infoPara}>{jobData.job_description}</p>
        </div>
      </div>
      <div className={styles.apply}>
        <h1 className={styles.applyTitle}>
          {jobDescriptionContent.jobDescriptionApplyTitle}
        </h1>
        <input
          className={styles.applyInput}
          type="text"
          name="coverLetter"
          value={coverLetter}
          onChange={(e) => {
            setCoverLetter(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (!userType) {
              navigate("/login");
            }
            applyStatusForJob(jobId, coverLetter)
              .then(() => {
                setButtonStatus(styles["appliedButton"]);
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
    <div className={styles.container}>
      <JobDescriptionCard />
    </div>
  );
};

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
import { RootState } from "../../store/store";
import { FaRupeeSign, FaCity } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IconContext } from "react-icons";

interface JobData {
  job_name?: string;
  job_technology?: Array<string>;
  job_mode?: string;
  job_salary?: number;
  job_location?: string;
  job_type?: string;
  job_experience?: number;
  job_description?: string;
  user?: {
    name: string;
  };
}

const JobDescriptionCard: React.FC = () => {
  const { id: jobId } = useParams<{ id: string }>();
  const userType = useSelector((state: RootState) => state.userType);
  const navigate = useNavigate();

  const [jobData, setJobData] = useState<JobData>({});
  const [coverLetter, setCoverLetter] = useState("");
  const [buttonStatus, setButtonStatus] = useState(styles["applyButton"]);
  const [buttonText, setButtonText] = useState("Apply Now");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleJob(jobId);
        setJobData(data);
      } catch (error) {
        alert(`${error}. ${jobDescriptionError}`);
      }
    };

    fetchData();
  }, [jobId]);

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
          <h1>({jobData.job_mode})</h1>
        </div>
        <div className={styles.jobEmployerDetail}>
          <h3>{jobData.user?.name}</h3>
          <IconContext.Provider
            value={{ size: "15", className: "global-class-name" }}
          >
            <p>
              <FaRupeeSign /> {jobData.job_salary} | <CiLocationOn />{" "}
              {jobData.job_location}
            </p>
          </IconContext.Provider>
          <p>
            <strong>Job type: </strong>
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
          onClick={async () => {
            if (!userType) {
              navigate("/login");
              return;
            }
            try {
              await applyStatusForJob(jobId, coverLetter);
              setButtonStatus(styles["appliedButton"]);
              setButtonText("Applied");
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

export const JobDescription: React.FC = () => {
  return (
    <div className={styles.container}>
      <JobDescriptionCard />
    </div>
  );
};

export default JobDescription;

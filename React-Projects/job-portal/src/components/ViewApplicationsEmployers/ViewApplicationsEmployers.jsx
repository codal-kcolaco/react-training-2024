import React, { useState, useEffect } from "react";
import styles from "./ViewApplicationsEmployers.module.scss";
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
      <div className={styles["application"]}>
        <div className={styles["application-container"]}>
          <div className={styles["application-info"]}>
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
            <div className={styles["view-application-employers-buttons"]}>
              <button
                className={styles["accept-button"]}
                onClick={() => selectApplicant("ACCEPTED")}
              >
                {viewApplicationEmployersInfo.acceptMessage}
              </button>
              <button
                className={styles["reject-button"]}
                onClick={() => selectApplicant("REJECTED")}
              >
                {viewApplicationEmployersInfo.rejectMessage}
              </button>
            </div>
          )}
          <div
            className={styles["button-confirm-container"]}
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
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>
        {viewApplicationEmployersInfo.jobApplicationHeading}
      </h1>
      <div className={styles["list-container"]}>
        {!lodash.isEmpty(jobApplication) ? (
          <ul id={styles["list"]}>
            {jobApplication.map((jobApplication, index) => (
              <JobApplicationEmployerCard
                key={index}
                jobApplication={jobApplication}
              />
            ))}
          </ul>
        ) : (
          <div className={styles["empty-list-container"]}>
            <img
              className={styles["empty-list-img"]}
              src={noJobLogo}
              alt="people"
            />
            <p className={styles["empty-list-message"]}>
              {viewApplicationEmployersInfo.jobApplicationEmptyMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

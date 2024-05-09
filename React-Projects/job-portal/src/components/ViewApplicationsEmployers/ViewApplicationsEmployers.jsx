import React, { useState, useEffect } from "react";
import styles from "./ViewApplicationsEmployers.module.scss";
import {
  fetchJobApplicationsEmployer,
  selectApplicantAPI,
} from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE, convertToDate } from "../../Constants.jsx";
import { toast } from "react-toastify";
import noJobLogo from "../../assets/people.png";
import { viewApplicationEmployersInfo } from "../../data/ViewApplicationsEmployers.js";
import { Modal } from "./Modal.jsx";

const JobApplicationEmployerCard = ({ jobApplication }) => {
  const [isSelected, setIsSelected] = useState(jobApplication.is_selected);
  const [openModal, setOpenModal] = useState(false);

  const selectApplicant = (status) => {
    setIsSelected(status);
    selectApplicantAPI(jobApplication.job, jobApplication.pk, status);
    setOpenModal(true);
  };

  return (
    <li>
      <div className={styles.application}>
        <div className={styles.applicationContainer}>
          <div className={styles.applicationInfo}>
            <h2>{jobApplication.applicant}</h2>
            <p>
              <strong>{viewApplicationEmployersInfo.appliedAt}</strong>{" "}
              {convertToDate(jobApplication.applied_at)}
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
            <div className={styles.viewApplicationEmployersButtons}>
              <button
                className={styles.acceptButton}
                onClick={() => selectApplicant("ACCEPTED")}
              >
                {viewApplicationEmployersInfo.acceptMessage}
              </button>
              <button
                className={styles.rejectButton}
                onClick={() => selectApplicant("REJECTED")}
              >
                {viewApplicationEmployersInfo.rejectMessage}
              </button>
            </div>
          )}
          <div
            className={styles.buttonConfirmContainer}
            style={{
              display: isSelected !== "PENDING" ? "flex" : "none",
              backgroundColor: isSelected === "ACCEPTED" ? "green" : "red",
            }}
          >
            {isSelected}
          </div>
        </div>
        <div className={styles.modalSelectionReply}>
          {openModal && (
            <Modal onClose={setOpenModal} jobApplication={jobApplication} />
          )}
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
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {viewApplicationEmployersInfo.jobApplicationHeading}
      </h1>
      <div className={styles.listContainer}>
        {!lodash.isEmpty(jobApplication) ? (
          <ul id={styles.list}>
            {jobApplication.map((jobApplication, index) => (
              <JobApplicationEmployerCard
                key={index}
                jobApplication={jobApplication}
              />
            ))}
          </ul>
        ) : (
          <div className={styles.emptyListContainer}>
            <img className={styles.emptyListImg} src={noJobLogo} alt="people" />
            <p className={styles.emptyListMessage}>
              {viewApplicationEmployersInfo.jobApplicationEmptyMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

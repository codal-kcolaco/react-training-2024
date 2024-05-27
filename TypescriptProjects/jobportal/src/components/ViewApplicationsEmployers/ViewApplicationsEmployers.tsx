import React, { useState, useEffect } from "react";
import styles from "./ViewApplicationsEmployers.module.scss";
import {
  fetchJobApplicationsEmployer,
  selectApplicantAPI,
} from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE, convertToDate } from "../../Constants";
import { toast } from "react-toastify";
import noJobLogo from "../../assets/people.png";
import { viewApplicationEmployersInfo } from "../../data/ViewApplicationsEmployers";
import { Modal } from "./Modal";
import { JobApplication } from "./JobApplicationModel";

const JobApplicationEmployerCard: React.FC<{
  jobApplication: JobApplication;
}> = ({ jobApplication }) => {
  const [isSelected, setIsSelected] = useState(jobApplication.is_selected);
  const [openModal, setOpenModal] = useState(false);

  const selectApplicant = (status: string) => {
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

export const ViewApplicationsEmployers: React.FC = () => {
  const [jobApplication, setJobApplication] = useState<JobApplication[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      if (!JWT_COOKIE) {
        navigate("/login");
        return;
      }

      fetchJobApplicationsEmployer(id)
        .then((data) => {
          setJobApplication(data);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    };

    fetchData();
  }, [id, navigate]);

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

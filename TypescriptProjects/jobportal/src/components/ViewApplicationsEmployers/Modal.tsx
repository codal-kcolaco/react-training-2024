import React, { useState, ChangeEvent } from "react";
import styles from "./ViewApplicationsEmployers.module.scss";
import { selectApplicantAPI, selectionReplyAPI } from "../../api/api";
import { JobApplication } from "./JobApplicationModel";

interface ModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  jobApplication: JobApplication | null;
}

export const Modal: React.FC<ModalProps> = ({ onClose, jobApplication }) => {
  const [selectionReply, setSelectionReply] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSelectionReply(e.currentTarget.value);
  };

  const handleConfirmClick = () => {
    selectionReplyAPI(jobApplication?.job, jobApplication?.pk, selectionReply);
    onClose(false);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitle}>
          <h1>Please enter the reason</h1>
        </div>
        <textarea
          className={styles.modalInput}
          value={selectionReply}
          onChange={handleChange}
        />
        <div className={styles.footer}>
          <button className={styles.confirmBtn} onClick={handleConfirmClick}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

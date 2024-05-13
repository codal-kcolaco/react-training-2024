import React from "react";
import styles from "./ViewApplicationsEmployers.module.scss";
import { selectApplicantAPI, selectionReplyAPI } from "../../api/api";
import { useState } from "react";

export const Modal = ({ onClose, jobApplication }) => {
  const [selectionReply, setSelectionReply] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSelectionReply(e.currentTarget.value);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitle}>
          <h1>Please enter the reason</h1>
        </div>
        <textarea
          className={styles.modalInput}
          type="text"
          name="selectionReply"
          onChange={(e) => handleChange(e)}
        />
        <div className={styles.footer}>
          <button
            className={styles.confirmBtn}
            onClick={() => {
              selectionReplyAPI(
                jobApplication.job,
                jobApplication.pk,
                selectionReply
              );
              onClose(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

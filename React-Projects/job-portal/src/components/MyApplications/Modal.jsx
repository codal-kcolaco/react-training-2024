import React from "react";
import styles from "./MyApplications.module.scss";
import { useState } from "react";

export const Modal = ({ onClose, jobApplication }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.modalTitle}>
          <h1>Please enter the reason</h1>
        </div>

        <div className={styles.footer}>
          <p>{jobApplication.selection_reply}</p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./MyApplications.module.scss";
import { useState } from "react";
import { MyApplication } from "./ApplicationModel";

interface ModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  jobApplication: MyApplication | null;
}
export const Modal: React.FC<ModalProps> = ({ onClose, jobApplication }) => {
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
          <h1>Reply from company</h1>
        </div>

        <div className={styles.footer}>
          <p>{jobApplication?.selection_reply}</p>
        </div>
      </div>
    </div>
  );
};

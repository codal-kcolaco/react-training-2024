import React, { useState, useEffect } from "react";
import styles from "./MyJobs.module.scss";
import { deleteJob, fetchJobsEmployer } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE } from "../../Constants.jsx";
import { toast } from "react-toastify";
import noJobLogo from "../../assets/people.png";
import { myJobsContent } from "../../data/MyJobsContent.js";

const MyJobCard = ({ myJob }) => {
  return (
    <li>
      <div className={styles.job}>
        <div className={styles.jobContainer}>
          <div className={styles.jobInfo}>
            <h2>{myJob.job_name}</h2>
            <p>
              <strong>Type:</strong> {myJob.job_type}
            </p>
            <p>
              <strong>Salary:</strong> {`${myJob.job_salary} INR`}
            </p>
          </div>
          <div className={styles.buttons}>
            <Link
              to={`/my-jobs/edit/${encodeURIComponent(myJob.pk)}`}
              className={styles.editButton}
            >
              Edit
            </Link>
            <a
              onClick={() => deleteJob(myJob.pk)}
              className={styles.deleteButton}
            >
              Delete
            </a>
            <Link
              to={`/my-jobs/applications/${encodeURIComponent(myJob.pk)}`}
              className={styles.viewApplicationButton}
            >
              Applications
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export const MyJobs = () => {
  const [myJobData, setmyJobData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      if (!JWT_COOKIE) {
        navigate("/login");
        return;
      }

      fetchJobsEmployer()
        .then((data) => {
          setmyJobData(data);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{myJobsContent.myJobHeading}</h1>
      <div className={styles.listContainer}>
        {!lodash.isEmpty(myJobData) ? (
          <ul className={styles.jobList}>
            {myJobData.map((myJob, index) => (
              <MyJobCard key={index} myJob={myJob} />
            ))}
          </ul>
        ) : (
          <div className={styles.emptyListContainer}>
            <img className={styles.emptyListImg} src={noJobLogo} alt="people" />
            <p className={styles.emptyListMessage}>
              {myJobsContent.myJobEmptyMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import styles from "./MyApplications.module.scss";
import { fetchMyApplications } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE, convertToDate } from "../../Constants.jsx";
import { toast } from "react-toastify";
import noJobLogo from "../../assets/people.png";
import { Modal } from "./Modal.jsx";

const MyApplicationCard = ({ myApplication }) => {
  const [openModal, setOpenModal] = useState(false);

  const applicationStatusColorMap = {
    ACCEPTED: "green",
    REJECTED: "red",
    PENDING: "orange",
  };

  return (
    <li>
      <div className={styles.application}>
        <div className={styles.applicationContainer}>
          <div className={styles.info}>
            <h2>{myApplication.applicant}</h2>
            <p>
              <strong>Cover letter:</strong> {myApplication.cover_letter}
            </p>
            <p>
              <strong>Job title:</strong> {myApplication.job_title}{" "}
              <Link to={`../job-description/${myApplication.job}`}>
                View job
              </Link>
            </p>
            <p>
              <strong>Applied at:</strong>{" "}
              {convertToDate(myApplication.applied_at)}
            </p>
          </div>
          <div className={styles.modalSelectionReply}>
            {openModal && (
              <Modal onClose={setOpenModal} jobApplication={myApplication} />
            )}
          </div>
          <div className={styles.statusSection}>
            <div
              className={styles.statusContainer}
              style={{
                backgroundColor:
                  applicationStatusColorMap[myApplication.is_selected],
              }}
            >
              {myApplication.is_selected}
            </div>
            {myApplication.is_selected !== "PENDING" && (
              <button onClick={() => setOpenModal(true)}>Reply</button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export const MyApplications = () => {
  const [myApplicationData, setmyApplicationData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      if (!JWT_COOKIE) {
        navigate("/login");
        return;
      }

      fetchMyApplications()
        .then((data) => {
          setmyApplicationData(data);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.myHeading}>Application Listings</h1>
      <div className={styles.listContainer}>
        {!lodash.isEmpty(myApplicationData) ? (
          <ul className={styles.list}>
            {myApplicationData.map((myApplication, index) => (
              <MyApplicationCard key={index} myApplication={myApplication} />
            ))}
          </ul>
        ) : (
          <div className={styles.emptyListContainer}>
            <img className={styles.emptyListImg} src={noJobLogo} alt="people" />
            <p className={styles.emptyListMessage}>No applications created</p>
          </div>
        )}
      </div>
    </div>
  );
};

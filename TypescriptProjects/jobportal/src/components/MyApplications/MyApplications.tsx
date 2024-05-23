import React, { useState, useEffect } from "react";
import styles from "./MyApplications.module.scss";
import { fetchMyApplications } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE, convertToDate } from "../../Constants";
import { toast } from "react-toastify";
import noJobLogo from "../../assets/people.png";
import { Modal } from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setMyApplication } from "../../store/store";
import { RootState } from "../../store/store";
import { MyApplication } from "./ApplicationModel";

interface MyApplicationCardProps {
  myApplication: MyApplication;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyApplicationCard: React.FC<MyApplicationCardProps> = ({
  myApplication,
  setOpenModal,
}) => {
  const dispatch = useDispatch();

  const applicationStatusColorMap: Record<string, string> = {
    ACCEPTED: "green",
    REJECTED: "red",
    PENDING: "orange",
  };

  return (
    <li>
      <div className={styles.application}>
        <div className={styles.applicationContainer}>
          <div className={styles.info}>
            <h2>
              <Link to={`../job-description/${myApplication.job}`}>
                {myApplication.job_title}
              </Link>
            </h2>
            <p>
              <strong>Cover letter:</strong> {myApplication.cover_letter}
            </p>
            <p>
              <strong>Email:</strong> {myApplication.applicant}{" "}
            </p>
            <p>
              <strong>Applied at:</strong>{" "}
              {convertToDate(myApplication.applied_at)}
            </p>
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
              <button
                className={styles.replyButton}
                onClick={() => {
                  dispatch(setMyApplication(myApplication));
                  setOpenModal(true);
                }}
              >
                Reply
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export const MyApplications: React.FC = () => {
  const [myApplicationData, setMyApplicationData] = useState<MyApplication[]>(
    []
  );
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const myApplication = useSelector((state: RootState) => state.myApplication);

  useEffect(() => {
    const fetchData = () => {
      if (!JWT_COOKIE) {
        navigate("/login");
        return;
      }

      fetchMyApplications()
        .then((data) => {
          setMyApplicationData(data);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    };

    fetchData();
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.myHeading}>Application Listings</h1>
      <div className={styles.listContainer}>
        {!lodash.isEmpty(myApplicationData) ? (
          <>
            <div className={styles.modalSelectionReply}>
              {openModal && (
                <Modal onClose={setOpenModal} jobApplication={myApplication} />
              )}
            </div>
            <ul className={styles.list}>
              {myApplicationData.map((myApplication, index) => (
                <MyApplicationCard
                  key={index}
                  myApplication={myApplication}
                  setOpenModal={setOpenModal}
                />
              ))}
            </ul>
          </>
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

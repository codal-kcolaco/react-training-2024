import React, { useState, useEffect } from "react";
import "./styles/MyApplications.scss";
import { fetchMyApplications } from "./api.js";
import { Link, useNavigate } from "react-router-dom";
import lodash from "lodash";
import { JWT_COOKIE, convertToDate } from "./Constants.jsx";
import { toast } from "react-toastify";
import noJobLogo from "./assets/people.png";

const MyApplicationCard = ({ myApplication }) => {
  const applicationStatusColorMap = {
    ACCEPTED: "green",
    REJECTED: "red",
    PENDING: "orange",
  };

  return (
    <li>
      <div className="application">
        <div className="application-container">
          <div className="application-info">
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
          <div
            className="status-container"
            style={{
              backgroundColor:
                applicationStatusColorMap[myApplication.is_selected],
            }}
          >
            {myApplication.is_selected}
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
    <div className="my-applications-container">
      <h1 className="my-application-heading">Application Listings</h1>
      <div className="my-applications-list-container">
        {!lodash.isEmpty(myApplicationData) ? (
          <ul id="application-list">
            {myApplicationData.map((myApplication, index) => (
              <MyApplicationCard key={index} myApplication={myApplication} />
            ))}
          </ul>
        ) : (
          <div className="empty-list-container">
            <img className="empty-list-img" src={noJobLogo} alt="people" />
            <p className="empty-list-message">No applications created</p>
          </div>
        )}
      </div>
    </div>
  );
};

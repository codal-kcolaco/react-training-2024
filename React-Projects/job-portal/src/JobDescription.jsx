import React, { useState, useEffect } from "react";
import "./styles/JobDescription.scss";
import { fetchSingleJob } from "./api";

const JobDescriptionCard = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");
  const jwtCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("jwt_token="));

  const [jobData, setJobData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleJob(jobId, jwtCookie);
        setJobData(data);
      } catch (error) {
        alert(`${error}. Please try again.`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="job-description-card" id="job-description-card">
      <div className="job-description-title-container">
        <img src="src/assets/codal.png" alt={jobData.job_name} />
        <div className="job-description-details">
          <h1>{jobData.job_name}</h1>
          {/* <p>
            <i className="fa-solid fa-star"></i> {jobData.ratings}
          </p>
          <p>({jobData.reviews} reviews)</p> */}
        </div>
      </div>
      <div className="job-description-overview">
        <strong>About {jobData.job_name}</strong>
        <p>{jobData.job_description}</p>
        {/* <p>
          <strong>Location:</strong> {jobData.location}
        </p> */}
        <p>
          <strong>Company:</strong>
          {/* {jobData.user.name} */}
        </p>
      </div>
    </div>
  );
};

export const JobDescription = () => {
  return (
    <div className="job-description-container">
      <JobDescriptionCard />
    </div>
  );
};

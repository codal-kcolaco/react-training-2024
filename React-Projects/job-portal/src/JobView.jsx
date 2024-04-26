import React from "react";
import jobData from "./data/job-data.js";
import "./styles/JobView.css";
const JobViewCard = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");

  const job = jobData.find(
    (job) => job.name.toLowerCase().replace(/\s/g, "-") === jobId
  );

  return (
    <div className="job-view-card" id="job-view-card">
      <div className="job-view-title-container">
        <img src={job.image} alt={job.name} />
        <div className="job-view-details">
          <h1>{job.name}</h1>
          <p>
            <i className="fa-solid fa-star"></i> {job.ratings}
          </p>
          <p>({job.reviews} reviews)</p>
        </div>
      </div>
      <div className="job-view-overview">
        <strong>About {job.name}</strong>
        <p>{job.description}</p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Technology:</strong>
          {job.technology}
        </p>
      </div>
      <div className="job-openings-card">
        <div className="job-openings">
          <h2>Job Openings</h2>
          <ul>
            <li>
              <strong>Frontend Developer</strong>
              <div className="job-openings-details">
                <p>San Francisco</p>
                <p>2+ years</p>
              </div>
              <button className="apply-now-button">Apply Now</button>
            </li>

            <li>
              <strong>Backend Engineer</strong>
              <div className="job-openings-details">
                <p>New York</p>
                <p>3+ years</p>
              </div>
              <button className="apply-now-button">Apply Now</button>
            </li>

            <li>
              <strong>UI/UX Designer</strong>
              <div className="job-openings-details">
                <p>London</p>
                <p>5+ years</p>
              </div>
              <button className="apply-now-button">Apply Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const JobView = () => {
  return (
    <div className="job-view-container">
      <JobViewCard />
    </div>
  );
};

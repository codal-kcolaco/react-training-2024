import React from "react";
import "./styles/JobView.css";

const JobDescriptionCard = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");

  const job = jobData.find(
    (job) => job.job_name.toLowerCase().replace(/\s/g, "-") === jobId
  );

  return (
    <div className="job-description-card" id="job-description-card">
      <div className="job-description-title-container">
        <img src="" alt={job.job_name} />
        <div className="job-description-details">
          <h1>{job.job_name}</h1>
          {/* <p>
            <i className="fa-solid fa-star"></i> {job.ratings}
          </p>
          <p>({job.reviews} reviews)</p> */}
        </div>
      </div>
      <div className="job-description-overview">
        <strong>About {job.job_name}</strong>
        <p>{job.job_description}</p>
        {/* <p>
          <strong>Location:</strong> {job.location}
        </p> */}
        <p>
          <strong>Company:</strong>
          {job.user.name}
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

export const JobDescription = () => {
  return (
    <div className="job-description-container">
      <JobDescriptionCard />
    </div>
  );
};

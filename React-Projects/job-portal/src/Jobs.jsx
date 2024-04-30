import React, { useState, useEffect } from "react";
// import jobData from "./data/job-data.js";
import "./styles/Jobs.scss";
import { fetchJobs } from "./api";

const JobCard = ({ job }) => {
  const { name, description, location, image, ratings, reviews, technology } =
    job;

  return (
    <div className="job-card">
      <a
        href={`job-view?id=${encodeURIComponent(
          job.name.toLowerCase().replace(/\s/g, "-")
        )}`}
      >
        <div className="chip">
          <div className="chip-img">
            <img src={image} alt={name} />
          </div>
          <div className="chip-description">
            <h3>{name}</h3>
            <p>
              <i className="fa-solid fa-star"></i>
              {`${ratings} (${reviews} reviews)`}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const JobCardPython = ({ job }) => {
  const { pk, user, job_name, job_type, job_description, job_salary } = job;

  return (
    <div className="job-card">
      <a href={`job-description?id=${pk}`}>
        <div className="chip">
          <div className="chip-img">
            <img src="src/assets/codal.png" alt={user.name} />
          </div>
          <div className="chip-description">
            <h3>{job_name}</h3>
            <p>{user.name}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

function Jobs() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobs();
        setJobData(data);
      } catch (error) {
        alert(`${error}. Please try again.`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="job-list-container">
      <section className="job-filter-section">
        <h1>Filter</h1>
        <hr />
        <h4>Technology</h4>
        <div className="filter-container">
          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="python"
              value="python"
              name="technology"
            />
            <label htmlFor="python">Python</label>
          </div>

          <div className="filter-checkbox">
            <input type="checkbox" id="java" value="java" name="technology" />
            <label htmlFor="java">Java</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="cplusplus"
              value="cplusplus"
              name="technology"
            />
            <label htmlFor="cplusplus">C++</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="javascript"
              value="javascript"
              name="technology"
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
          <div className="filter-checkbox">
            <input type="checkbox" id="c#" value="c#" name="technology" />
            <label htmlFor="c#">C#</label>
          </div>
          <div className="filter-checkbox">
            <input type="checkbox" id="ruby" value="ruby" name="technology" />
            <label htmlFor="ruby">Ruby</label>
          </div>
        </div>
        <h4>Location</h4>
        <div className="filter-container">
          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="ahmedabad"
              value="ahmedabad"
              name="location"
            />
            <label htmlFor="ahmedabad">Ahmedabad</label>
          </div>

          <div className="filter-checkbox">
            <input type="checkbox" id="surat" value="surat" name="location" />
            <label htmlFor="surat">Surat</label>
          </div>

          <div className="filter-checkbox">
            <input type="checkbox" id="goa" value="goa" name="location" />
            <label htmlFor="goa">Goa</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="coimbatore"
              value="coimbatore"
              name="location"
            />
            <label htmlFor="coimbatore">Coimbatore</label>
          </div>

          <div className="filter-checkbox">
            <input type="checkbox" id="jaipur" value="jaipur" name="location" />
            <label htmlFor="jaipur">Jaipur</label>
          </div>
        </div>
      </section>
      <section className="job-list-section">
        <div className="job-search-container">
          <input
            className="job-search-input"
            type="text"
            placeholder="Search for your jobs"
          />
          <h1>Jobs</h1>
        </div>
        <div className="job-list-section-grid">
          {/* {jobData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))} */}
          {jobData.map((job, index) => (
            <JobCardPython key={index} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Jobs;

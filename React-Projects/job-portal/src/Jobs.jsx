import React, { useState, useEffect } from "react";
// import jobData from "./data/job-data.js";
import "./styles/Jobs.scss";
import { fetchJobs } from "./api";
import noJobLogo from "./assets/people.png";
import lodash from "lodash";

const JobCardPython = ({ job }) => {
  const { pk, user, job_name, job_type, job_description, job_salary } = job;

  return (
    <div className="job-card">
      <a href={`job-description?id=${pk}`}>
        <div className="chip">
          <div className="chip-img">
            <img src="src/assets/job-search.png" alt={user.name} />
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
  const [filters, setFilters] = useState({ technology: [], location: [] });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetchJobs()
        .then((data) => {
          setJobData(data);
        })
        .catch((error) => {
          alert(`${error}. Please try again.`);
        });
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    const filteredJobs = jobData.filter((job) => {
      return (
        (filters.technology.length === 0 ||
          filters.technology.includes(job.job_technology)) &&
        (filters.location.length === 0 ||
          filters.location.includes(job.job_location.toLowerCase())) &&
        (search === "" ||
          job.job_name.toLowerCase().includes(search.toLowerCase()))
      );
    });

    return filteredJobs;
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  const filteredJobData = applyFilters();

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
              onChange={() => handleFilterChange("technology", "PYTHON")}
            />
            <label htmlFor="python">Python</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="java"
              value="java"
              name="technology"
              onChange={() => handleFilterChange("technology", "JAVA")}
            />
            <label htmlFor="java">Java</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="c"
              value="c"
              name="technology"
              onChange={() => handleFilterChange("technology", "C")}
            />
            <label htmlFor="c">C</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="javascript"
              value="javascript"
              name="technology"
              onChange={() => handleFilterChange("technology", "JAVASCRIPT")}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="ruby"
              value="ruby"
              name="technology"
              onChange={() => handleFilterChange("technology", "RUBY")}
            />
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
              onChange={() => handleFilterChange("location", "ahmedabad")}
            />
            <label htmlFor="ahmedabad">Ahmedabad</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="surat"
              value="surat"
              name="location"
              onChange={() => handleFilterChange("location", "surat")}
            />
            <label htmlFor="surat">Surat</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="Baroda"
              value="Baroda"
              name="location"
              onChange={() => handleFilterChange("location", "baroda")}
            />
            <label htmlFor="Baroda">Baroda</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="Morbi"
              value="Morbi"
              name="location"
              onChange={() => handleFilterChange("location", "morbi")}
            />
            <label htmlFor="Morbi">Morbi</label>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="Rajkot"
              value="Rajkot"
              name="location"
              onChange={() => handleFilterChange("location", "rajkot")}
            />
            <label htmlFor="Rajkot">Rajkot</label>
          </div>
        </div>
      </section>
      <section className="job-list-section">
        <div className="job-search-container">
          <input
            className="job-search-input"
            type="text"
            placeholder="Search for your jobs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h1>Jobs</h1>
        </div>
        <div className="job-list-section-grid">
          {!lodash.isEmpty(filteredJobData) ? (
            filteredJobData.map((job, index) => (
              <JobCardPython key={index} job={job} />
            ))
          ) : (
            <div className="empty-list-container">
              <img className="empty-list-img" src={noJobLogo} alt="people" />
              <p className="empty-list-message">No jobs listed</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Jobs;

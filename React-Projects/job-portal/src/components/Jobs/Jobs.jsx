import React, { useState, useEffect } from "react";

import "./Jobs.scss";
import { fetchJobs } from "../../api/api";
import noJobLogo from "../../assets/people.png";
import lodash from "lodash";
import { Link } from "react-router-dom";
import {
  jobsError,
  jobsContent,
  TECHNOLOGIES,
  LOCATIONS,
} from "../../data/JobsContent";

const JobCardPython = ({ job }) => {
  const { pk, user, job_name, job_type, job_description, job_salary } = job;

  return (
    <div className="job-card">
      <Link to={`../job-description/${pk}`}>
        <div className="chip">
          <div className="chip-img">
            <img src="../../assets/job-search.png" alt={user.name} />
          </div>
          <div className="chip-description">
            <h3>{job_name}</h3>
            <p>{user.name}</p>
          </div>
        </div>
      </Link>
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
          alert(`${error}. ${jobsError}`);
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
        <h1>{jobsContent.jobFilterTitle}</h1>
        <hr />
        <h4>{jobsContent.jobTechnologyTitle}</h4>
        <div className="filter-container">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.id} className="filter-checkbox">
              <input
                type="checkbox"
                id={tech.id}
                value={tech.value}
                name="technology"
                onChange={() =>
                  handleFilterChange("technology", tech.value.toUpperCase())
                }
              />
              <label htmlFor={tech.id}>{tech.label}</label>
            </div>
          ))}
        </div>
        <h4>Location</h4>
        <div className="filter-container">
          {LOCATIONS.map((location) => (
            <div key={location.id} className="filter-checkbox">
              <input
                type="checkbox"
                id={location.id}
                value={location.value}
                name="location"
                onChange={() => handleFilterChange("location", location.value)}
              />
              <label htmlFor={location.id}>{location.label}</label>
            </div>
          ))}
        </div>
      </section>
      <section className="job-list-section">
        <div className="job-search-container">
          <input
            className="job-search-input"
            type="text"
            placeholder={jobsContent.jobSearchPlaceholer}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h1>{jobsContent.jobTitle}</h1>
        </div>
        <div className="job-list-section-grid">
          {!lodash.isEmpty(filteredJobData) ? (
            filteredJobData.map((job, index) => (
              <JobCardPython key={index} job={job} />
            ))
          ) : (
            <div className="empty-list-container">
              <img className="empty-list-img" src={noJobLogo} alt="people" />
              <p className="empty-list-message">
                {jobsContent.jobEmptyMessage}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Jobs;

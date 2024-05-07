import React, { useState, useEffect } from "react";
import styles from "./Jobs.module.scss";
import { fetchJobs } from "../../api/api";
import noJobLogo from "../../assets/people.png";
import jobSearchLogo from "../../assets/job-search.png";
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
    <div className={styles["card"]}>
      <Link to={`../job-description/${pk}`}>
        <div className={styles["chip"]}>
          <div className={styles["chip-img"]}>
            <img src={jobSearchLogo} alt={user.name} />
          </div>
          <div className={styles["chip-description"]}>
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
    <div className={styles["list-container"]}>
      <section className={styles["filter-section"]}>
        <h1>{jobsContent.jobFilterTitle}</h1>
        <hr />
        <h4>{jobsContent.jobTechnologyTitle}</h4>
        <div className={styles["filter-container"]}>
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.id} className={styles["filter-checkbox"]}>
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
        <div className={styles["filter-container"]}>
          {LOCATIONS.map((location) => (
            <div key={location.id} className={styles["filter-checkbox"]}>
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
      <section className={styles["list-section"]}>
        <div className={styles["search-container"]}>
          <input
            className={styles["search-input"]}
            type="text"
            placeholder={jobsContent.jobSearchPlaceholer}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h1>{jobsContent.jobTitle}</h1>
        </div>
        <div className={styles["list-section-grid"]}>
          {!lodash.isEmpty(filteredJobData) ? (
            filteredJobData.map((job, index) => (
              <JobCardPython key={index} job={job} />
            ))
          ) : (
            <div className={styles["empty-list-container"]}>
              <img
                className={styles["empty-list-img"]}
                src={noJobLogo}
                alt="people"
              />
              <p className={styles["empty-list-message"]}>
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

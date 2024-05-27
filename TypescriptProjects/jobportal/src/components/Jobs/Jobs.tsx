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
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { CiLocationOn } from "react-icons/ci";

interface Job {
  pk: string;
  user: {
    name: string;
  };
  job_name: string;
  job_type: string;
  job_description: string;
  job_salary: string;
  job_technology: string;
  job_location: string;
}

interface Filter {
  technology: string[];
  location: string[];
}

interface Technology {
  id: string;
  value: string;
  label: string;
}

interface Location {
  id: string;
  value: string;
  label: string;
}

interface JobCardProps {
  job: Job;
}

const JobCardPython: React.FC<JobCardProps> = ({ job }) => {
  const { pk, user, job_name, job_location } = job;

  return (
    <div className={styles.card}>
      <Link to={`../job-description/${pk}`}>
        <div className={styles.chip}>
          <IconContext.Provider
            value={{ size: "40", className: "global-class-name" }}
          >
            <div className={styles.chipImg}>
              <HiBuildingOffice2 />
            </div>
          </IconContext.Provider>
          <div className={styles.chipDescription}>
            <h3>{job_name}</h3>
            <p>{user.name}</p>
          </div>
          <IconContext.Provider
            value={{ size: "15", className: "global-class-name" }}
          >
            <div className={styles.chipFooter}>
              <CiLocationOn /> {job_location}
            </div>
          </IconContext.Provider>
        </div>
      </Link>
    </div>
  );
};

const Jobs: React.FC = () => {
  const [jobData, setJobData] = useState<Job[]>([]);
  const [filters, setFilters] = useState<Filter>({
    technology: [],
    location: [],
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobs();
        setJobData(data);
      } catch (error) {
        alert(`${error}. ${jobsError}`);
      }
    };

    fetchData();
  }, []);

  const applyFilters = (): Job[] => {
    return jobData.filter((job) => {
      return (
        (filters.technology.length === 0 ||
          filters.technology.includes(job.job_technology)) &&
        (filters.location.length === 0 ||
          filters.location.includes(job.job_location.toLowerCase())) &&
        (search === "" ||
          job.job_name.toLowerCase().includes(search.toLowerCase()))
      );
    });
  };

  const handleFilterChange = (type: keyof Filter, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  const filteredJobData = applyFilters();

  return (
    <div className={styles.listContainer}>
      <section className={styles.filterSection}>
        <h1>{jobsContent.jobFilterTitle}</h1>
        <hr />
        <h4>{jobsContent.jobTechnologyTitle}</h4>
        <div className={styles.filterContainer}>
          {TECHNOLOGIES.map((tech: Technology) => (
            <div key={tech.id} className={styles.filterCheckbox}>
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
        <div className={styles.filterContainer}>
          {LOCATIONS.map((location: Location) => (
            <div key={location.id} className={styles.filterCheckbox}>
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
      <section className={styles.listSection}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder={jobsContent.jobSearchPlaceholer}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h1>{jobsContent.jobTitle}</h1>
        </div>
        <div className={styles.listSectionGrid}>
          {!lodash.isEmpty(filteredJobData) ? (
            filteredJobData.map((job, index) => (
              <JobCardPython key={index} job={job} />
            ))
          ) : (
            <div className={styles.emptyListContainer}>
              <img
                className={styles.emptyListImg}
                src={noJobLogo}
                alt="people"
              />
              <p className={styles.emptyListMessage}>
                {jobsContent.jobEmptyMessage}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Jobs;

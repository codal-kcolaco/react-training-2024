import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/EditJob.scss";
import { editJob, fetchSingleJob } from "./api";
import { JWT_COOKIE } from "./Constants";
import { toast } from "react-toastify";

const EditJob = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    jobType: "",
    jobSalary: 0,
    jobDescription: "",
    jobTechnology: "PYTHON",
    jobLocation: "",
    jobExperience: 0,
  });

  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);

  const jobId = urlParams.get("id");

  useEffect(() => {
    const fetchData = () => {
      fetchSingleJob(jobId)
        .then((data) => {
          setJobDetails(data);
        })
        .catch((error) => {
          alert(`${error}. Please try again.`);
        });
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setJobDetails({
      ...jobDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const editAJob = (event) => {
    event.preventDefault();
    editJob(
      jobId,
      jobDetails.jobTitle,
      jobDetails.jobType,
      jobDetails.jobSalary,
      jobDetails.jobDescription,
      jobDetails.jobExperience,
      jobDetails.jobLocation,
      jobDetails.jobTechnology
    )
      .then(() => {
        toast.success("Edited a job");
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return JWT_COOKIE ? (
    <div className="edit-job-container">
      <div className="edit-job-title-container">
        <h1 className="edit-job-h1">Edit a Job</h1>
      </div>
      <form>
        <div className="edit-job-form-group">
          <label htmlFor="job-title">Title of the Job</label>
          <input
            className="edit-job-input"
            type="text"
            id="job-title"
            value={jobDetails.jobTitle}
            onChange={(e) => handleChange(e)}
            name="jobTitle"
            required
          />
        </div>
        <div className="edit-job-form-group">
          <label htmlFor="job-type">
            Type of the Job (Eg: Software Engineer, Human Resources)
          </label>
          <input
            className="edit-job-input"
            type="text"
            id="job-type"
            value={jobDetails.jobType}
            onChange={(e) => handleChange(e)}
            name="jobType"
            required
          />
        </div>
        <div className="edit-job-form-group">
          <label htmlFor="job-technology">
            Technology Required for the Job
          </label>
          <select
            className="edit-job-select"
            type="text"
            id="job-technology"
            value={jobDetails.jobTechnology}
            onChange={(e) => handleChange(e)}
            name="jobTechnology"
            required
          >
            <option value="PYTHON">Python</option>
            <option value="GO">Go</option>
            <option value="JAVASCRIPT">JavaScript</option>
            <option value="JAVA">Java</option>
            <option value="PHP">PHP</option>
            <option value="C">C</option>
            <option value="SWIFT">Swift</option>
            <option value="SQL">SQL</option>
            <option value="RUBY">Ruby</option>
            <option value="RUST">Rust</option>
          </select>
        </div>
        <div className="edit-job-form-group">
          <label htmlFor="job-salary">
            Salary provided by you on per month basis
          </label>
          <input
            className="edit-job-input"
            type="text"
            id="job-salary"
            value={jobDetails.jobSalary}
            onChange={(e) => handleChange(e)}
            name="jobSalary"
          />
        </div>
        <div className="edit-job-form-group">
          <label htmlFor="job-experience">Years of experience required</label>
          <input
            className="edit-job-input"
            type="text"
            id="job-experience"
            value={jobDetails.jobExperience}
            onChange={(e) => handleChange(e)}
            name="jobExperience"
          />
        </div>
        <div className="edit-job-form-group">
          <label htmlFor="job-location">Location of the Job</label>
          <input
            className="edit-job-input"
            type="text"
            id="job-location"
            value={jobDetails.jobLocation}
            onChange={(e) => handleChange(e)}
            name="jobLocation"
            required
          />
        </div>
        <div className="edit-job-form-group">
          <label htmlFor="description">Description of the Job</label>
          <textarea
            id="description"
            name="jobDescription"
            value={jobDetails.jobDescription}
            onChange={(e) => handleChange(e)}
            rows="5"
            className="edit-job-textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className="edit-job-submit" onClick={editAJob}>
          Edit Job
        </button>
      </form>
    </div>
  ) : (
    useEffect(() => {
      navigate("../login");
    }, [])
  );
};
export default EditJob;

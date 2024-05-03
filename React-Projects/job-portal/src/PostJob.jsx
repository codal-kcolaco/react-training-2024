import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PostJob.scss";
import { postJob } from "./api";
import { toast } from "react-toastify";
import { JWT_COOKIE } from "./Constants";

const PostJob = () => {
  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    jobType: "",
    jobSalary: 0,
    jobDescription: "",
    jobTechnology: "PYTHON",
    jobLocation: "",
    jobExperience: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setJobDetails({
      ...jobDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const postAJob = async (event) => {
    event.preventDefault();
    postJob(
      jobDetails.jobTitle,
      jobDetails.jobType,
      jobDetails.jobSalary,
      jobDetails.jobDescription,
      jobDetails.jobExperience,
      jobDetails.jobLocation,
      jobDetails.jobTechnology
    )
      .then(() => {
        toast.success("Posted a job");
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  return JWT_COOKIE ? (
    <div className="post-job-container">
      <div className="post-job-title-container">
        <h1 className="post-job-h1">Post a Job</h1>
        <a href="my-jobs">Already posted a job?</a>
      </div>
      <form>
        <div className="post-job-form-group">
          <label htmlFor="job-title">Title of the Job</label>
          <input
            className="post-job-input"
            type="text"
            id="job-title"
            value={jobDetails.jobTitle}
            onChange={(e) => handleChange(e)}
            name="jobTitle"
            required
          />
        </div>
        <div className="post-job-form-group">
          <label htmlFor="job-type">
            Type of the Job (Eg: Software Engineer, Human Resources)
          </label>
          <input
            className="post-job-input"
            type="text"
            id="job-type"
            value={jobDetails.jobType}
            onChange={(e) => handleChange(e)}
            name="jobType"
            required
          />
        </div>
        <div className="post-job-form-group">
          <label htmlFor="job-technology">
            Technology Required for the Job
          </label>
          <select
            className="post-job-select"
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
        <div className="post-job-form-group">
          <label htmlFor="job-salary">
            Salary provided by you on per month basis
          </label>
          <input
            className="post-job-input"
            type="text"
            id="job-salary"
            value={jobDetails.jobSalary}
            onChange={(e) => handleChange(e)}
            name="jobSalary"
          />
        </div>
        <div className="post-job-form-group">
          <label htmlFor="job-experience">Years of experience required</label>
          <input
            className="post-job-input"
            type="text"
            id="job-experience"
            value={jobDetails.jobExperience}
            onChange={(e) => handleChange(e)}
            name="jobExperience"
          />
        </div>
        <div className="post-job-form-group">
          <label htmlFor="job-location">Location of the Job</label>
          <input
            className="post-job-input"
            type="text"
            id="job-location"
            value={jobDetails.jobLocation}
            onChange={(e) => handleChange(e)}
            name="jobLocation"
            required
          />
        </div>
        <div className="post-job-form-group">
          <label htmlFor="description">Description of the Job</label>
          <textarea
            id="description"
            name="jobDescription"
            value={jobDetails.jobDescription}
            onChange={(e) => handleChange(e)}
            rows="5"
            className="post-job-textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className="post-job-submit" onClick={postAJob}>
          Post the Job
        </button>
      </form>
    </div>
  ) : (
    useEffect(() => {
      navigate("../login");
    }, [])
  );
};
export default PostJob;

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
    jobType: "SOFTWARE ENGINEERING",
    jobSalary: 0,
    jobDescription: "",
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
    try {
      await postJob(
        jobDetails.jobTitle,
        jobDetails.jobType,
        jobDetails.jobSalary,
        jobDetails.jobDescription
      );
      toast.success("Posted a job");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return JWT_COOKIE ? (
    <div className="post-job-container">
      <div className="post-job-title-container">
        <h1 className="post-job-h1">Post a Job</h1>
        <a href="my-jobs">Already posted a job?</a>
      </div>
      <form>
        <div className="post-job-form-group">
          <label htmlFor="job-title">Job Title:</label>
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
          <label htmlFor="job-type">Job Type:</label>
          <select
            className="post-job-select"
            type="text"
            id="job-type"
            value={jobDetails.jobType}
            onChange={(e) => handleChange(e)}
            name="jobType"
            required
          >
            <option value="SOFTWARE ENGINEERING">Software Engineering</option>
            <option value="ARCHITECTURE">Architecture</option>
            <option value="ACCOUNTING">Accounting</option>
          </select>
        </div>
        <div className="post-job-form-group">
          <label htmlFor="job-salary">Job Salary:</label>
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
          <label className="post-job-label" htmlFor="description">
            Job Description:
          </label>
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
          Post Job
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

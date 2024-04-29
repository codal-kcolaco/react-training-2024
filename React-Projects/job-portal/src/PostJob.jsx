import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PostJob.scss";
import { postJob } from "./api";
import { toast } from "react-toastify";
import { JWT_COOKIE } from "./Constants";

const PostJob = () => {
  let isLoggedIn = false;
  const navigate = useNavigate();

  if (JWT_COOKIE) {
    isLoggedIn = true;
  }

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("SOFTWARE ENGINEERING");
  const [jobSalary, setJobSalary] = useState(0);
  const [jobDescription, setJobDescription] = useState("");

  const postAJob = async (event) => {
    event.preventDefault();
    try {
      await postJob(jobTitle, jobType, jobSalary, jobDescription);
      toast.success("Posted a job");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return isLoggedIn ? (
    <div className="post-job-container">
      <div className="post-job-title-container">
        <h1 className="post-job-h1">Post a Job</h1>
        <a href="my-jobs">Already posted a job?</a>
      </div>
      <form>
        <div className="post-job-form-group">
          <label for="job-title">Job Title:</label>
          <input
            className="post-job-input"
            type="text"
            id="job-title"
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
            name="job-title"
            required
          />
        </div>
        <div className="post-job-form-group">
          <label for="job-type">Job Type:</label>
          <select
            className="post-job-select"
            type="text"
            id="job-type"
            value={jobType}
            onChange={(e) => {
              setJobType(e.target.value);
            }}
            name="job-type"
            required
          >
            <option value="SOFTWARE ENGINEERING">Software Engineering</option>
            <option value="ARCHITECTURE">Architecture</option>
            <option value="ACCOUNTING">Accounting</option>
          </select>
        </div>
        <div className="post-job-form-group">
          <label for="job-salary">Job Salary:</label>
          <input
            className="post-job-input"
            type="text"
            id="job-salary"
            value={jobSalary}
            onChange={(e) => {
              setJobSalary(e.target.value);
            }}
            name="job-salary"
          />
        </div>
        <div className="post-job-form-group">
          <label className="post-job-label" for="description">
            Job Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={jobDescription}
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
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

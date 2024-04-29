import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/EditJob.scss";
import { editJob } from "./api";
import { JWT_COOKIE } from "./Constants";

const EditJob = () => {
  let isLoggedIn = false;
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);

  const jobId = urlParams.get("id");

  if (JWT_COOKIE) {
    isLoggedIn = true;
  }

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("SOFTWARE ENGINEERING");
  const [jobSalary, setJobSalary] = useState(0);
  const [jobDescription, setJobDescription] = useState("");

  const editAJob = async (event) => {
    event.preventDefault();
    try {
      await editJob(jobId, jobTitle, jobType, jobSalary, jobDescription);
      alert("Edited the job");
    } catch (error) {
      alert(`${error}. Please try again.`);
    }
  };

  return isLoggedIn ? (
    <div className="edit-job-container">
      <div className="edit-job-title-container">
        <h1 className="edit-job-h1">Edit a Job</h1>
      </div>
      <form>
        <div className="edit-job-form-group">
          <label for="job-title">Job Title:</label>
          <input
            className="edit-job-input"
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
        <div className="edit-job-form-group">
          <label for="job-type">Job Type:</label>
          <select
            className="edit-job-select"
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
        <div className="edit-job-form-group">
          <label for="job-salary">Job Salary:</label>
          <input
            className="edit-job-input"
            type="text"
            id="job-salary"
            value={jobSalary}
            onChange={(e) => {
              setJobSalary(e.target.value);
            }}
            name="job-salary"
          />
        </div>
        <div className="edit-job-form-group">
          <label className="edit-job-label" for="description">
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

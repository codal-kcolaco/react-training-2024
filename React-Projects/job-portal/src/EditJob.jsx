import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/EditJob.scss";
import { editJob } from "./api";
import { JWT_COOKIE } from "./Constants";
import { toast } from "react-toastify";

const EditJob = () => {
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

  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);

  const jobId = urlParams.get("id");

  const editAJob = async (event) => {
    event.preventDefault();
    try {
      await editJob(
        jobId,
        jobDetails.jobTitle,
        jobDetails.jobType,
        jobDetails.jobSalary,
        jobDetails.jobDescription
      );
      toast.success("Edited a job");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return JWT_COOKIE ? (
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
            value={jobDetails.jobTitle}
            onChange={(e) => handleChange(e)}
            name="jobTitle"
            required
          />
        </div>
        <div className="edit-job-form-group">
          <label for="job-type">Job Type:</label>
          <select
            className="edit-job-select"
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
        <div className="edit-job-form-group">
          <label for="job-salary">Job Salary:</label>
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
          <label className="edit-job-label" for="description">
            Job Description:
          </label>
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

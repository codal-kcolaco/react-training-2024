import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/EditJob.scss";
import { editJob, fetchSingleJob } from "./api";
import { JWT_COOKIE } from "./Constants";
import { toast } from "react-toastify";
import { editJobContent } from "./data/EditJobsContent";

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

  const jobId = useParams().id;

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
        {editJobContent.map((input, index) => (
          <div className="edit-job-form-group" key={index}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === "select" ? (
              <select
                className="edit-job-select"
                id={input.id}
                value={jobDetails[input.name]}
                onChange={handleChange}
                name={input.name}
                required={input.required}
              >
                {input.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : input.type === "textarea" ? (
              <textarea
                id={input.id}
                name={input.name}
                value={jobDetails[input.name]}
                onChange={handleChange}
                rows={input.rows}
                className="edit-job-textarea"
                required={input.required}
                placeholder={input.placeholder}
              ></textarea>
            ) : (
              <input
                className="edit-job-input"
                type={input.type}
                id={input.id}
                value={jobDetails[input.name]}
                onChange={handleChange}
                name={input.name}
                required={input.required}
                placeholder={input.placeholder}
              />
            )}
          </div>
        ))}
        <button type="submit" className="edit-job-submit" onClick={editAJob}>
          Edit the Job
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

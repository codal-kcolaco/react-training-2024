import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PostJob.scss";
import { postJob } from "../../api/api";
import { toast } from "react-toastify";
import { JWT_COOKIE } from "../../Constants";
import { postJobContent, postJobTitle } from "../../data/PostJobContent";

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

  useEffect(() => {
    if (!JWT_COOKIE) {
      navigate("../login");
    }
  }, [navigate]);

  return JWT_COOKIE ? (
    <div className="post-job-container">
      <div className="post-job-title-container">
        <h1 className="post-job-h1">{postJobTitle.postJobHeading}</h1>
        <a href="my-jobs">{postJobTitle.myJobMessage}</a>
      </div>
      <form>
        {postJobContent.map((input, index) => (
          <div className="post-job-form-group" key={index}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === "select" ? (
              <select
                className="post-job-select"
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
                className="post-job-textarea"
                required={input.required}
                placeholder={input.placeholder}
              ></textarea>
            ) : (
              <input
                className="post-job-input"
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
        <button type="submit" className="post-job-submit" onClick={postAJob}>
          Post the Job
        </button>
      </form>
    </div>
  ) : null;
};
export default PostJob;

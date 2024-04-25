import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PostJob.css";
import axios from "axios";

const PostJob = () => {
  let isLoggedIn = false;
  const navigate = useNavigate();

  const jwtCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("jwt_token="));

  if (jwtCookie) {
    isLoggedIn = true;
  }

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobSalary, setJobSalary] = useState(0);
  const [jobDescription, setJobDescription] = useState("");

  const postAJob = async (event) => {
    event.preventDefault();
    var requestBody = {
      job_name: jobTitle,
      job_type: jobType,
      job_description: jobDescription,
      job_salary: jobSalary,
    };

    const customConfig = {
      headers: {
        "Content-Type": "application/json",
        Cookie: jwtCookie,
      },
    };

    axios.defaults.headers.common.Authorization = `${jwtCookie}`;

    const Client = axios.create({
      withCredentials: true,
    });

    const result = await Client.post(
      "http://127.0.0.1:8000/api/employer/jobs/",
      requestBody,
      customConfig
    );

    console.log(result);

    // fetch("http://127.0.0.1:8000/api/employer/jobs/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(requestBody),
    // })
    //   .then(async (response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response is not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     alert("Posted a job");
    //   })
    //   .catch((error) => {
    //     alert(`${error}. Please try again.`);
    //   });
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
          <input
            className="post-job-input"
            type="text"
            id="job-type"
            value={jobType}
            onChange={(e) => {
              setJobType(e.target.value);
            }}
            name="job-type"
            required
          />
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

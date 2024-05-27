import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostJob.module.scss";
import { postJob } from "../../api/api";
import { toast } from "react-toastify";
import { JWT_COOKIE } from "../../Constants";
import { postJobContent, postJobTitle } from "../../data/PostJobContent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface JobDetails {
  jobTitle: string;
  jobType: string;
  jobSalary: number;
  jobDescription: string;
  jobTechnology: string;
  jobLocation: string;
  jobExperience: number;
}

const PostJob: React.FC = () => {
  const navigate = useNavigate();
  const userType = useSelector((state: RootState) => state.userType);

  const [jobDetails, setJobDetails] = useState<JobDetails>({
    jobTitle: "",
    jobType: "",
    jobSalary: 0,
    jobDescription: "",
    jobTechnology: "PYTHON",
    jobLocation: "",
    jobExperience: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setJobDetails({
      ...jobDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const postAJob = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await postJob(
        jobDetails.jobTitle,
        jobDetails.jobType,
        jobDetails.jobSalary,
        jobDetails.jobDescription,
        jobDetails.jobExperience,
        jobDetails.jobLocation,
        jobDetails.jobTechnology
      );
      toast.success("Posted a job");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    if (!JWT_COOKIE) {
      navigate("../login");
    }
  }, [navigate]);

  return userType !== "APPLICANT" ? (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.h1}>{postJobTitle.postJobHeading}</h1>
        <a href="my-jobs">{postJobTitle.myJobMessage}</a>
      </div>
      <form onSubmit={postAJob}>
        {postJobContent.map((input, index) => (
          <div className={styles.formGroup} key={index}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === "select" ? (
              <select
                className={styles.select}
                id={input.id}
                value={jobDetails[input.name as keyof JobDetails]}
                onChange={handleChange}
                name={input.name}
                required={input.required}
              >
                {input.options?.map((option, idx) => (
                  <option key={idx} value={option.toUpperCase()}>
                    {option}
                  </option>
                ))}
              </select>
            ) : input.type === "textarea" ? (
              <textarea
                id={input.id}
                name={input.name}
                value={jobDetails[input.name as keyof JobDetails]}
                onChange={handleChange}
                rows={input.rows}
                className={styles.textarea}
                required={input.required}
                // placeholder={input.placeholder}
              ></textarea>
            ) : (
              <input
                className={styles.input}
                type={input.type}
                id={input.id}
                value={jobDetails[input.name as keyof JobDetails]}
                onChange={handleChange}
                name={input.name}
                required={input.required}
                // placeholder={input.placeholder}
              />
            )}
          </div>
        ))}
        <button type="submit" className={styles.submit}>
          Post the Job
        </button>
      </form>
    </div>
  ) : (
    <div className={styles.noPermissionContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.h1}>You are not allowed to create jobs</h1>
        <p>If you want to create jobs, create a new account as a company</p>
      </div>
    </div>
  );
};

export default PostJob;

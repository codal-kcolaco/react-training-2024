import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditJob.module.scss";
import { editJob, fetchSingleJob } from "../../api/api";
import { JWT_COOKIE } from "../../Constants";
import { toast } from "react-toastify";
import { editJobContent } from "../../data/EditJobsContent";

const EditJob = () => {
  const [jobDetails, setJobDetails] = useState({});

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const jobId = useParams().id;

  useEffect(() => {
    const fetchData = () => {
      fetchSingleJob(jobId)
        .then((data) => {
          setJobDetails(data);
          setLoading(false);
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
      jobDetails.job_name,
      jobDetails.job_type,
      jobDetails.job_salary,
      jobDetails.job_description,
      jobDetails.job_experience,
      jobDetails.job_location,
      jobDetails.job_technology
    )
      .then(() => {
        toast.success("Edited a job");
      })
      .catch((error) => {
        toast.error(`${error}`);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return JWT_COOKIE ? (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.h1}>Edit a Job</h1>
      </div>
      <form>
        {editJobContent.map((input, index) => (
          <div className={styles.formGroup} key={index}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === "select" ? (
              <select
                className={styles.select}
                id={input.id}
                onChange={handleChange}
                value={jobDetails[input.value]}
                name={input.name}
                required={input.required}
              >
                {input.options.map((option, idx) => (
                  <option key={idx} value={option.toUpperCase()}>
                    {option}
                  </option>
                ))}
              </select>
            ) : input.type === "textarea" ? (
              <textarea
                id={input.id}
                name={input.name}
                value={jobDetails[input.value]}
                onChange={handleChange}
                rows={input.rows}
                className={styles.textarea}
                required={input.required}
                placeholder={input.placeholder}
              ></textarea>
            ) : (
              <input
                className={styles.input}
                type={input.type}
                id={input.id}
                value={jobDetails[input.value]}
                onChange={handleChange}
                name={input.name}
                required={input.required}
                placeholder={input.placeholder}
              />
            )}
          </div>
        ))}
        <button type="submit" className={styles.submit} onClick={editAJob}>
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

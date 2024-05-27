import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditJob.module.scss";
import { editJob, fetchSingleJob } from "../../api/api";
import { JWT_COOKIE } from "../../Constants";
import { toast } from "react-toastify";
import { editJobContent } from "../../data/EditJobsContent";
import { RxCross2 } from "react-icons/rx";

interface JobDetails {
  job_name: string;
  job_type: string;
  job_salary: number;
  job_description: string;
  job_technology: Array<string>;
  job_location: string;
  job_experience: number;
  job_mode: string;
}

const EditJob: React.FC = () => {
  const [jobDetails, setJobDetails] = useState<JobDetails>({
    job_name: "",
    job_type: "",
    job_salary: 0,
    job_description: "",
    job_technology: [],
    job_mode: "HYBRID",
    job_location: "",
    job_experience: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id: jobId } = useParams<{ id: string }>();
  const [technology, setTechnology] = useState<string>("");
  const [technologyList, setTechnologyList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleJob(jobId);
        setJobDetails(data);
        setTechnologyList(data.job_technology);
        setLoading(false);
      } catch (error) {
        alert(`${error}. Please try again.`);
      }
    };

    fetchData();
  }, [jobId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setJobDetails({
      ...jobDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick(event);
    }
  };

  const handleChangeJobTechnology = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setTechnology(e?.currentTarget?.value);
  };

  const handleClick = (event: KeyboardEvent<HTMLElement>) => {
    if (technology !== "" && !technologyList.find((t) => t === technology)) {
      // let techList = [...technologyList];
      // techList.push(technology);

      setTechnologyList([...technologyList, technology]);
      setJobDetails({
        ...jobDetails,
        job_technology: [...technologyList, technology],
      });
      setTechnology("");
    }
  };

  const removeTechnology = (value: string) => {
    let techList = technologyList.filter((t) => t !== value);
    setTechnologyList([...techList]);
    setJobDetails({ ...jobDetails, job_technology: [...techList] });
  };

  const editAJob = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await editJob(
        jobId,
        jobDetails.job_name,
        jobDetails.job_type,
        jobDetails.job_salary,
        jobDetails.job_description,
        jobDetails.job_experience,
        jobDetails.job_location,
        jobDetails.job_technology,
        jobDetails.job_mode
      );
      toast.success("Edited a job");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!JWT_COOKIE) {
    navigate("../login");
    return null;
  }

  return (
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
                value={jobDetails[input.value as keyof JobDetails]}
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
                value={jobDetails[input.value as keyof JobDetails]}
                onChange={handleChange}
                rows={input.rows}
                className={styles.textarea}
                required={input.required}
              ></textarea>
            ) : input.id === "job-technology" ? (
              <div className={styles.jobTechnologyContainer}>
                <input
                  className={styles.input}
                  type={input.type}
                  id={input.id}
                  value={technology}
                  onChange={handleChangeJobTechnology}
                  onKeyDown={onKeyDownHandler}
                  name={input.name}
                />

                <div className={styles.cardContainer}>
                  {technologyList.map((technology_value, index) => (
                    <div
                      key={index}
                      className={styles.card}
                      onClick={() => removeTechnology(technology_value)}
                    >
                      {technology_value} <RxCross2 />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <input
                className={styles.input}
                type={input.type}
                id={input.id}
                value={jobDetails[input.value as keyof JobDetails]}
                onChange={handleChange}
                name={input.name}
                required={input.required}
              />
            )}
          </div>
        ))}
        <button type="submit" className={styles.submit} onClick={editAJob}>
          Edit the Job
        </button>
      </form>
    </div>
  );
};

export default EditJob;

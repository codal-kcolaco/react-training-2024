import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PostJob.module.scss";
import { postJob } from "../../api/api";
import { toast } from "react-toastify";
import { JWT_COOKIE } from "../../Constants";
import { postJobContent, postJobTitle } from "../../data/PostJobContent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { RxCross2 } from "react-icons/rx";

interface JobDetails {
  jobTitle: string;
  jobType: string;
  jobMode: string;
  jobSalary: number;
  jobDescription: string;
  jobTechnology: Array<string>;
  jobLocation: string;
  jobExperience: number;
}

const PostJob: React.FC = () => {
  const [technology, setTechnology] = useState<string>("");
  const [technologyList, setTechnologyList] = useState<string[]>([]);
  const navigate = useNavigate();
  const userType = useSelector((state: RootState) => state.userType);

  const [jobDetails, setJobDetails] = useState<JobDetails>({
    jobTitle: "",
    jobType: "",
    jobMode: "OFFICE",
    jobSalary: 0,
    jobDescription: "",
    jobTechnology: [],
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
      let techList = [...technologyList];
      techList.push(technology);
      setTechnologyList([...techList]);
      setJobDetails({ ...jobDetails, jobTechnology: [...techList] });
      setTechnology("");
    }
  };

  const removeTechnology = (value: string) => {
    let techList = technologyList.filter((t) => t !== value);
    setTechnologyList([...techList]);
    setJobDetails({ ...jobDetails, jobTechnology: [...techList] });
  };

  const postAJob = async (event: FormEvent) => {
    event.preventDefault();
    console.log(jobDetails);

    try {
      await postJob(
        jobDetails.jobTitle,
        jobDetails.jobType,
        jobDetails.jobSalary,
        jobDetails.jobDescription,
        jobDetails.jobExperience,
        jobDetails.jobLocation,
        jobDetails.jobTechnology,
        jobDetails.jobMode
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
                min={input.min}
                value={jobDetails[input.name as keyof JobDetails]}
                onChange={handleChange}
                name={input.name}
                required={input.required}
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

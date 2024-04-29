import axios from "axios";
import {
  SIGNUP_URL,
  LOGIN_URL,
  POST_JOB_URL,
  GET_JOB_URL,
  GET_JOB_EMPLOYER_URL,
  GET_SINGLE_JOB_URL,
  GET_SINGLE_JOB_EMPLOYER_URL,
  JWT_COOKIE,
} from "./Constants";

export const registerUser = async (fullname, email, password) => {
  try {
    const response = await axios.post(SIGNUP_URL, {
      name: fullname,
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.email) {
      throw new Error(error.response.data.email[0]);
    } else if (
      error.response &&
      error.response.data &&
      error.response.data.password
    ) {
      throw new Error(error.response.data.password[0]);
    } else {
      throw new Error("Network response is not ok");
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(LOGIN_URL, {
      email: email,
      password: password,
    });

    const jwtToken = response.data.jwt;

    document.cookie = `jwt_token=${jwtToken}; expires=${new Date(
      Date.now() + 86400 * 1000
    ).toUTCString()}; path=/`;

    return jwtToken;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const postJob = async (jobTitle, jobType, jobSalary, jobDescription) => {
  try {
    const response = await axios.post(
      POST_JOB_URL,
      {
        job_name: jobTitle,
        job_type: jobType,
        job_description: jobDescription,
        job_salary: jobSalary,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: JWT_COOKIE,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const editJob = async (
  jobId,
  jobTitle,
  jobType,
  jobSalary,
  jobDescription
) => {
  try {
    const response = await axios.put(
      POST_JOB_URL + jobId + "/",
      {
        job_name: jobTitle,
        job_type: jobType,
        job_description: jobDescription,
        job_salary: jobSalary,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: JWT_COOKIE,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const deleteJob = async (jobId) => {
  try {
    const response = await axios.delete(POST_JOB_URL + jobId + "/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: JWT_COOKIE,
      },
    });

    window.location.reload();

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobs = async () => {
  try {
    const response = await axios.get(GET_JOB_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchSingleJob = async (jobId) => {
  try {
    const response = await axios.get(GET_SINGLE_JOB_URL + jobId + "/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: JWT_COOKIE,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobsEmployer = async () => {
  try {
    const response = await axios.get(GET_JOB_EMPLOYER_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: JWT_COOKIE,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchSingleJobForEmployer = async (jobId) => {
  try {
    const response = await axios.get(
      GET_SINGLE_JOB_EMPLOYER_URL + jobId + "/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: JWT_COOKIE,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

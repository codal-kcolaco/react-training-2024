import {
  SIGNUP_URL,
  LOGIN_URL,
  POST_JOB_URL,
  GET_JOB_URL,
  GET_SINGLE_JOB_URL,
} from "./Constants";

export const registerUser = async (fullname, email, password) => {
  const requestBody = {
    name: fullname,
    email: email,
    password: password,
  };

  const response = await fetch(SIGNUP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const data = await response.json();
    if (data.email) {
      throw new Error(data.email[0]);
    } else if (data.password) {
      throw new Error(data.password[0]);
    } else {
      throw new Error("Network response is not ok");
    }
  }

  return response.json();
};

export const loginUser = async (email, password) => {
  const requestBody = {
    email: email,
    password: password,
  };

  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("Network response is not ok");
  }

  const data = await response.json();
  const jwtToken = data.jwt;

  document.cookie = `jwt_token=${jwtToken}; expires=${new Date(
    Date.now() + 86400 * 1000
  ).toUTCString()}; path=/`;

  return jwtToken;
};

export const postJob = async (
  jwtToken,
  jobTitle,
  jobType,
  jobSalary,
  jobDescription
) => {
  const requestBody = {
    job_name: jobTitle,
    job_type: jobType,
    job_description: jobDescription,
    job_salary: jobSalary,
  };

  const response = await fetch(POST_JOB_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtToken,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("Network response is not ok");
  }

  return response.json();
};

export const fetchJobs = async () => {
  const response = await fetch(GET_JOB_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response is not ok");
  }

  return response.json();
};

export const fetchSingleJob = async (jobId, jwtToken) => {
  const response = await fetch(GET_SINGLE_JOB_URL + jobId + "/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwtToken,
    },
  });

  if (!response.ok) {
    throw new Error("Network response is not ok");
  }

  return response.json();
};

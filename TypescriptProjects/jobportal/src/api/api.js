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
  GET_SINGLE_JOB_APPLICATION_URL,
  CHANGE_PASSWORD_URL,
  BE_ENDPOINT,
} from "../Constants";
import { useDispatch } from "react-redux";
import { setUserType } from "../store/store";

const api = axios.create({
  baseURL: BE_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    Authorization: JWT_COOKIE,
  },
});

export const registerUser = async (fullname, email, password, userType) => {
  try {
    const response = await api.post(SIGNUP_URL, {
      name: fullname,
      email: email,
      password: password,
      user_type: userType,
    });

    return response.data;
  } catch (error) {
    console.log(error);
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

export const loginUser = async (email, password, dispatch) => {
  try {
    const response = await api.post(LOGIN_URL, {
      email: email,
      password: password,
    });

    const jwtToken = response.data.jwt;

    dispatch(setUserType(response.data.user_type));
    document.cookie = `jwt_token=${jwtToken}; expires=${new Date(
      Date.now() + 86400 * 1000
    ).toUTCString()}; path=/`;

    return jwtToken;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data) {
      if (error.response.data.email) {
        throw new Error(error.response.data.email[0]);
      } else if (error.response.data.password) {
        throw new Error(error.response.data.password[0]);
      } else if (error.response.data.detail) {
        throw new Error(error.response.data.detail);
      } else {
        throw new Error("Network response is not ok");
      }
    } else {
      throw new Error("Network response is not ok");
    }
  }
};

export const postJob = async (
  jobTitle,
  jobType,
  jobSalary,
  jobDescription,
  jobExperience,
  jobLocation,
  jobTechnology
) => {
  try {
    const response = await api.post(POST_JOB_URL, {
      job_name: jobTitle,
      job_type: jobType,
      job_description: jobDescription,
      job_salary: jobSalary,
      job_experience: jobExperience,
      job_location: jobLocation,
      job_technology: jobTechnology,
    });

    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const editJob = async (
  jobId,
  jobTitle,
  jobType,
  jobSalary,
  jobDescription,
  jobExperience,
  jobLocation,
  jobTechnology
) => {
  try {
    const response = await api.put(POST_JOB_URL + jobId + "/", {
      job_name: jobTitle,
      job_type: jobType,
      job_description: jobDescription,
      job_salary: jobSalary,
      job_experience: jobExperience,
      job_location: jobLocation,
      job_technology: jobTechnology,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      if (error.response.data.job_name) {
        throw new Error(error.response.data.job_name[0]);
      } else if (error.response.data.job_type) {
        throw new Error(error.response.data.job_type[0]);
      } else if (error.response.data.job_description) {
        throw new Error(error.response.data.job_description[0]);
      } else if (error.response.data.job_salary) {
        throw new Error(error.response.data.job_salary[0]);
      } else {
        throw new Error("Network response is not ok");
      }
    } else {
      throw new Error("Network response is not ok");
    }
  }
};

export const deleteJob = async (jobId) => {
  try {
    const response = await api.delete(POST_JOB_URL + jobId + "/");

    window.location.reload();

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobs = async () => {
  try {
    const response = await api.get(GET_JOB_URL);

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchSingleJob = async (jobId) => {
  try {
    const response = await api.get(GET_SINGLE_JOB_URL + jobId + "/");

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobsEmployer = async () => {
  try {
    const response = await api.get(GET_JOB_EMPLOYER_URL);

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchSingleJobForEmployer = async (jobId) => {
  try {
    const response = await api.get(GET_SINGLE_JOB_EMPLOYER_URL + jobId + "/");

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const selectApplicantAPI = async (
  jobId,
  applicationId,
  selectionStatus
) => {
  try {
    const response = await api.patch(
      POST_JOB_URL + jobId + "/" + "application-status/" + applicationId + "/",
      {
        is_selected: selectionStatus,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const selectionReplyAPI = async (
  jobId,
  applicationId,
  selectionReply
) => {
  try {
    const response = await api.patch(
      POST_JOB_URL +
        jobId +
        "/" +
        "application-selection-reply/" +
        applicationId +
        "/",
      {
        selection_reply: selectionReply,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const fetchMyApplications = async () => {
  try {
    const response = await api.get(GET_SINGLE_JOB_APPLICATION_URL);

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobApplicationsEmployer = async (jobId) => {
  try {
    const response = await api.get(
      GET_SINGLE_JOB_EMPLOYER_URL + jobId + "/applications/"
    );

    return response.data;
  } catch (error) {
    throw new Error("Network response is not ok");
  }
};

export const applyStatusForJob = async (jobId, coverLetter) => {
  try {
    const response = await api.post(GET_SINGLE_JOB_APPLICATION_URL, {
      job: jobId,
      cover_letter: coverLetter,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      if (error.response.data.job) {
        throw new Error(error.response.data.job[0]);
      } else if (error.response.data.cover_letter) {
        throw new Error(
          `${error.response.data.cover_letter[0]} - Cover Letter`
        );
      }
    } else {
      throw new Error("Network response is not ok");
    }
  }
};

export const changePasswordUser = async (oldPassword, newPassword) => {
  try {
    const response = await api.post(CHANGE_PASSWORD_URL, {
      old_password: oldPassword,
      new_password: newPassword,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      if (error.response.data.detail) {
        throw new Error(error.response.data.detail);
      }
    } else {
      throw new Error("Network response is not ok");
    }
  }
};

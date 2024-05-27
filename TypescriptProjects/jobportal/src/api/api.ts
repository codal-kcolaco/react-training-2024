import axios, { AxiosResponse } from "axios";
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
  GET_USER_URL,
} from "../Constants";
import { useDispatch } from "react-redux";
import { setUserType } from "../store/store";

interface UserResponse {
  jwt: string;
  user_type: string;
}

interface JobResponse {
  [key: string]: any;
}

interface ApplicationResponse {
  [key: string]: any;
}

interface ChangePasswordResponse {
  detail: string;
}

const api = axios.create({
  baseURL: BE_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    Authorization: JWT_COOKIE,
  },
});

export const registerUser = async (
  fullname: string,
  email: string,
  password: string,
  userType: string
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post(SIGNUP_URL, {
      name: fullname,
      email: email,
      password: password,
      user_type: userType,
    });

    return response.data;
  } catch (error: any) {
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

export const loginUser = async (
  email: string,
  password: string,
  dispatch: ReturnType<typeof useDispatch>
): Promise<string> => {
  try {
    const response: AxiosResponse<UserResponse> = await api.post(LOGIN_URL, {
      email: email,
      password: password,
    });

    const jwtToken = response.data.jwt;

    dispatch(setUserType(response.data.user_type));
    document.cookie = `jwt_token=${jwtToken}; expires=${new Date(
      Date.now() + 86400 * 1000
    ).toUTCString()}; path=/`;

    return jwtToken;
  } catch (error: any) {
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

export const getUser = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(GET_USER_URL);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error("Network response is not ok");
  }
};

export const postJob = async (
  jobTitle: string,
  jobType: string,
  jobSalary: number,
  jobDescription: string,
  jobExperience: number,
  jobLocation: string,
  jobTechnology: string
): Promise<any> => {
  try {
    const response: AxiosResponse<JobResponse> = await api.post(POST_JOB_URL, {
      job_name: jobTitle,
      job_type: jobType,
      job_description: jobDescription,
      job_salary: jobSalary,
      job_experience: jobExperience,
      job_location: jobLocation,
      job_technology: jobTechnology,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};

export const editJob = async (
  jobId: string | undefined,
  jobTitle: string,
  jobType: string,
  jobSalary: number,
  jobDescription: string,
  jobExperience: number,
  jobLocation: string,
  jobTechnology: string
): Promise<any> => {
  try {
    const response: AxiosResponse<JobResponse> = await api.put(
      POST_JOB_URL + jobId + "/",
      {
        job_name: jobTitle,
        job_type: jobType,
        job_description: jobDescription,
        job_salary: jobSalary,
        job_experience: jobExperience,
        job_location: jobLocation,
        job_technology: jobTechnology,
      }
    );

    return response.data;
  } catch (error: any) {
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

export const deleteJob = async (jobId: number): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.delete(
      POST_JOB_URL + jobId + "/"
    );

    window.location.reload();

    return response.data;
  } catch (error: any) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobs = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(GET_JOB_URL);

    return response.data;
  } catch (error: any) {
    throw new Error("Network response is not ok");
  }
};

export const fetchSingleJob = async (
  jobId: string | undefined
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(
      GET_SINGLE_JOB_URL + jobId + "/"
    );

    return response.data;
  } catch (error: any) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobsEmployer = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(GET_JOB_EMPLOYER_URL);

    return response.data;
  } catch (error: any) {
    throw new Error("Network response is not ok");
  }
};

export const fetchSingleJobForEmployer = async (
  jobId: string
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(
      GET_SINGLE_JOB_EMPLOYER_URL + jobId + "/"
    );

    return response.data;
  } catch (error: any) {
    throw new Error("Network response is not ok");
  }
};

export const selectApplicantAPI = async (
  jobId: string,
  applicationId: string,
  selectionStatus: string
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.patch(
      POST_JOB_URL + jobId + "/" + "application-status/" + applicationId + "/",
      {
        is_selected: selectionStatus,
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};

export const selectionReplyAPI = async (
  jobId: string | undefined,
  applicationId: string | undefined,
  selectionReply: string
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.patch(
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
  } catch (error: any) {
    throw new Error(`${error}`);
  }
};

export const fetchMyApplications = async (): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(
      GET_SINGLE_JOB_APPLICATION_URL
    );

    return response.data;
  } catch (error: any) {
    throw new Error("Network response is not ok");
  }
};

export const fetchJobApplicationsEmployer = async (
  jobId: string | undefined
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.get(
      GET_SINGLE_JOB_EMPLOYER_URL + jobId + "/applications/"
    );

    return response.data;
  } catch (error: any) {
    throw new Error("Network response is not ok");
  }
};

export const applyStatusForJob = async (
  jobId: string | undefined,
  coverLetter: string
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await api.post(
      GET_SINGLE_JOB_APPLICATION_URL,
      {
        job: jobId,
        cover_letter: coverLetter,
      }
    );

    return response.data;
  } catch (error: any) {
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

export const changePasswordUser = async (
  oldPassword: string,
  newPassword: string
): Promise<any> => {
  try {
    const response: AxiosResponse<ChangePasswordResponse> = await api.post(
      CHANGE_PASSWORD_URL,
      {
        old_password: oldPassword,
        new_password: newPassword,
      }
    );

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      if (error.response.data.detail) {
        throw new Error(error.response.data.detail);
      }
    } else {
      throw new Error("Network response is not ok");
    }
  }
};

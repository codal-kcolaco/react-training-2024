export const BE_ENDPOINT = "http://127.0.0.1:8000/api";

export const POST_JOB_URL = `${BE_ENDPOINT}/employer/jobs/`;
export const GET_JOB_URL = `${BE_ENDPOINT}/applicants/jobs/`;
export const GET_JOB_EMPLOYER_URL = `${BE_ENDPOINT}/employer/jobs/`;
export const GET_SINGLE_JOB_EMPLOYER_URL = `${BE_ENDPOINT}/employer/jobs/`;
export const GET_SINGLE_JOB_URL = `${BE_ENDPOINT}/applicants/jobs/`;
export const GET_SINGLE_JOB_APPLICATION_URL = `${BE_ENDPOINT}/applicants/job/application/`;
export const LOGIN_URL = `${BE_ENDPOINT}/login`;
export const SIGNUP_URL = `${BE_ENDPOINT}/register`;
export const CHANGE_PASSWORD_URL = `${BE_ENDPOINT}/change-password`;
export const JWT_COOKIE = document.cookie
  .split(";")
  .find((cookie) => cookie.trim().startsWith("jwt_token="));

export const convertToDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

export const POST_JOB_URL = "/employer/jobs/";
export const GET_JOB_URL = "/applicants/jobs/";
export const GET_JOB_EMPLOYER_URL = "/employer/jobs/";
export const GET_SINGLE_JOB_EMPLOYER_URL = "/employer/jobs/";
export const GET_SINGLE_JOB_URL = "/applicants/jobs/";
export const GET_SINGLE_JOB_APPLICATION_URL = "/applicants/job/application/";
export const LOGIN_URL = "/login";
export const SIGNUP_URL = "/register";
export const CHANGE_PASSWORD_URL = "/change-password";
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

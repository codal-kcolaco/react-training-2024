export const BE_ENDPOINT: string = "http://127.0.0.1:8000/api";
export const POST_JOB_URL: string = "/employer/jobs/";
export const GET_JOB_URL: string = "/applicants/jobs/";
export const GET_JOB_EMPLOYER_URL: string = "/employer/jobs/";
export const GET_SINGLE_JOB_EMPLOYER_URL: string = "/employer/jobs/";
export const GET_SINGLE_JOB_URL: string = "/applicants/jobs/";
export const GET_SINGLE_JOB_APPLICATION_URL: string =
  "/applicants/job/application/";
export const LOGIN_URL: string = "/login";
export const SIGNUP_URL: string = "/register";
export const CHANGE_PASSWORD_URL: string = "/change-password";
export const JWT_COOKIE: string | undefined = document.cookie
  .split(";")
  .find((cookie) => cookie.trim().startsWith("jwt_token="));

export const convertToDate = (dateString: string): string => {
  const date: Date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };
  const formattedDate: string = date.toLocaleString("en-US", options);
  return formattedDate;
};

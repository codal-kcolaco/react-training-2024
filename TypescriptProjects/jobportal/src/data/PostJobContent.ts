type PostJobField = {
  type: string;
  id: string;
  name: string;
  label: string;
  options?: string[];
  min?: string;
  rows?: number;
  required?: boolean;
};

export const postJobContent: PostJobField[] = [
  {
    type: "text",
    id: "job-title",
    name: "jobTitle",
    label: "Title of the Job",
    required: true,
  },
  {
    type: "text",
    id: "job-type",
    name: "jobType",
    label: "Type of the Job (Eg: Software Engineer, Human Resources)",
    required: true,
  },
  {
    type: "select",
    id: "job-mode",
    name: "jobMode",
    label: "Mode for the Job",
    options: ["Office", "Home", "Hybrid"],
    required: true,
  },
  {
    type: "text",
    id: "job-technology",
    name: "jobTechnology",
    label: "Skills Required for Job",
    required: true,
  },

  {
    type: "number",
    id: "job-salary",
    name: "jobSalary",
    min: "0",
    label: "Salary provided by you on per month basis",
  },
  {
    type: "number",
    id: "job-experience",
    name: "jobExperience",
    min: "0",
    label: "Years of experience required",
  },
  {
    type: "text",
    id: "job-location",
    name: "jobLocation",
    label: "Location of the Job",
    required: true,
  },
  {
    type: "textarea",
    id: "description",
    name: "jobDescription",
    label: "Description of the Job",
    rows: 5,
    required: true,
  },
];

export const postJobTitle = {
  postJobHeading: "Post a job",
  myJobMessage: "Already posted a job ?",
};

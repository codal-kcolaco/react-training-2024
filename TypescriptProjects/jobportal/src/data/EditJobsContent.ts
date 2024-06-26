type JobOption = {
  type: string;
  id: string;
  name: string;
  value: string;
  label: string;
  required?: boolean;
  options?: string[];
  rows?: number;
};

export const editJobContent: JobOption[] = [
  {
    type: "text",
    id: "job-title",
    name: "job_name",
    value: "job_name",
    label: "Title of the Job",
    required: true,
  },
  {
    type: "text",
    id: "job-type",
    name: "job_type",
    value: "job_type",
    label: "Type of the Job (Eg: Software Engineer, Human Resources)",
    required: true,
  },
  {
    type: "select",
    id: "job-mode",
    name: "job_mode",
    value: "job_mode",
    label: "Mode Required for the Job",
    options: ["Office", "Hybrid", "Home"],
    required: true,
  },
  {
    type: "text",
    id: "job-technology",
    value: "job_technology",
    name: "jobTechnology",
    label: "Skills Required for Job",
    required: true,
  },
  {
    type: "text",
    id: "job-salary",
    name: "job_salary",
    value: "job_salary",
    label: "Salary provided by you on per month basis",
  },
  {
    type: "text",
    id: "job-experience",
    name: "job_experience",
    value: "job_experience",
    label: "Years of experience required",
  },
  {
    type: "text",
    id: "job-location",
    name: "job_location",
    value: "job_location",
    label: "Location of the Job",
    required: true,
  },
  {
    type: "textarea",
    id: "description",
    name: "job_description",
    value: "job_description",
    label: "Description of the Job",
    rows: 5,
    required: true,
  },
];

type PostJobTitle = {
  postJobHeading: string;
  myJobMessage: string;
};

export const postJobTitle: PostJobTitle = {
  postJobHeading: "Post a job",
  myJobMessage: "Already posted a job ?",
};

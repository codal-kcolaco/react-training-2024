export const postJobContent = [
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
    id: "job-technology",
    name: "jobTechnology",
    label: "Technology Required for the Job",
    options: [
      "Python",
      "Go",
      "JavaScript",
      "Java",
      "PHP",
      "C",
      "Swift",
      "SQL",
      "Ruby",
      "Rust",
    ],
    required: true,
  },
  {
    type: "text",
    id: "job-salary",
    name: "jobSalary",

    label: "Salary provided by you on per month basis",
  },
  {
    type: "text",
    id: "job-experience",
    name: "jobExperience",

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

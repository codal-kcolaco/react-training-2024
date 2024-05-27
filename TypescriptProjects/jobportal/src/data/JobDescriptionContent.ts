type JobDescriptionError = {
  error: string,
};

export const jobDescriptionError: JobDescriptionError = {
  error: "Please try again",
};

type JobDescriptionContent = {
  jobDescriptionTitle: string,
  jobDescriptionApplyTitle: string,
  jobExperience: string,
};

export const jobDescriptionContent: JobDescriptionContent = {
  jobDescriptionTitle: "Job Description",
  jobDescriptionApplyTitle: "Cover Letter",
  jobExperience: "years of experience required",
};

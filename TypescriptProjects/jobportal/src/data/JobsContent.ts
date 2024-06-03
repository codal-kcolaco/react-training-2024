type JobsError = {
  error: string;
};

export const jobsError: JobsError = {
  error: "Please try again",
};

type JobsContent = {
  jobTitle: string;
  jobFilterTitle: string;
  jobModeTitle: string;
  jobExperience: string;
  jobEmptyMessage: string;
  jobSearchPlaceholer: string;
};

export const jobsContent: JobsContent = {
  jobTitle: "Jobs",
  jobFilterTitle: "Filter",
  jobModeTitle: "Mode",
  jobExperience: "years of experience required",
  jobEmptyMessage: "No jobs listed",
  jobSearchPlaceholer: "Search for your jobs",
};

type Technology = {
  id: string;
  value: string;
  label: string;
};

type Mode = {
  id: string;
  value: string;
  label: string;
};

export const TECHNOLOGIES: Technology[] = [
  { id: "python", value: "python", label: "Python" },
  { id: "java", value: "java", label: "Java" },
  { id: "c", value: "c", label: "C" },
  { id: "javascript", value: "javascript", label: "JavaScript" },
  { id: "ruby", value: "ruby", label: "Ruby" },
];

export const MODES: Mode[] = [
  { id: "office", value: "office", label: "Office" },
  { id: "home", value: "home", label: "Home" },
  { id: "hybrid", value: "hybrid", label: "Hybrid" },
];

type Location = {
  id: string;
  value: string;
  label: string;
};

export const LOCATIONS: Location[] = [
  { id: "ahmedabad", value: "ahmedabad", label: "Ahmedabad" },
  { id: "surat", value: "surat", label: "Surat" },
  { id: "baroda", value: "baroda", label: "Baroda" },
  { id: "morbi", value: "morbi", label: "Morbi" },
  { id: "rajkot", value: "rajkot", label: "Rajkot" },
];

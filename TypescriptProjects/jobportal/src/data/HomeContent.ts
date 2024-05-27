type BannerContent = {
  title: string,
  subtitle: string,
  button: string,
};

export const bannerContent: BannerContent = {
  title: "Find Your Dream Job",
  subtitle: "Start your career journey today!",
  button: "Browse Jobs",
};

type JobCardContent = {
  title: string,
  description: string,
  button: string,
};

export const jobCardContent: JobCardContent = {
  title: "Create a job easily",
  description: "Hiring employees is just a few steps away!",
  button: "Create a Job",
};

type SearchContent = {
  title: string,
  subtitle: string,
  placeholder: string,
};

export const searchContent: SearchContent = {
  title: "Search your jobs using our advanced search engine",
  subtitle: "Your dream job is near",
  placeholder: "Search for your jobs",
};

type FilterContent = {
  filterTitle: string,
};

export const filterContent: FilterContent = {
  filterTitle: "Filter based on technologies",
};

type FilterTechnology = {
  id: number,
  name: string,
  logoSrc: string,
};

export const filterTechnologies: FilterTechnology[] = [
  {
    id: 1,
    name: "Python",
    logoSrc: "https://learn.microsoft.com/en-us/media/logos/logo_python.svg",
  },
  {
    id: 2,
    name: "Golang",
    logoSrc:
      "https://learn.microsoft.com/en-us/media/logos/logo_Go-lightblue.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    logoSrc: "https://learn.microsoft.com/en-us/media/logos/logo_js.svg",
  },
  {
    id: 4,
    name: "Java",
    logoSrc: "https://learn.microsoft.com/en-us/media/logos/logo_java.svg",
  },
  {
    id: 5,
    name: ".NET",
    logoSrc: "https://learn.microsoft.com/en-us/azure/media/index/net-logo.svg",
  },
];

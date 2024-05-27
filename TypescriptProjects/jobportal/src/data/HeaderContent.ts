type NavItem = {
  text: string,
  link: string,
};

export const navItemsApplicant: NavItem[] = [
  { text: "Jobs", link: "/jobs" },
  { text: "My Applications", link: "/my-applications" },
];

export const navItemsEmployer: NavItem[] = [
  { text: "Jobs", link: "/jobs" },
  { text: "Post a Job", link: "/post-job" },
  { text: "My Jobs", link: "/my-jobs" },
];

type NavContent = {
  signUp: string,
  login: string,
  logout: string,
};

export const navContent: NavContent = {
  signUp: "Sign Up",
  login: "Login",
  logout: "Logout",
};

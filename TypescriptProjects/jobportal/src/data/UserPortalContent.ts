type UserPortalContent = {
  pageTitle: string;
  avatarAltText: string;
  oldPasswordPlaceholder: string;
  newPasswordPlaceholder: string;
  buttonText: string;
  successMessage: string;
  errorMessage: string;
};

export const userPortalContent: UserPortalContent = {
  pageTitle: "User Portal",
  avatarAltText: "User Avatar",
  oldPasswordPlaceholder: "Enter Old Password",
  newPasswordPlaceholder: "Enter New Password",
  buttonText: "Change Password",
  successMessage: "Password changed successfully",
  errorMessage: "An error occurred. Please try again.",
};

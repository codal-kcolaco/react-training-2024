export const signUpContent = [
  {
    name: "fullname",
    type: "text",
    placeholder: "Your Name / Company Name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    required: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    required: true,
  },
];

export const signUpError = {
  passwordErrorMessage: "Passwords do not match",
  registrationSuccessfulMessage: "Registration Successful",
  tryAgainLaterMessage: "Please try again",
};

export default signUpContent;

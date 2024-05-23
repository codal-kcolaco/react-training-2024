type LoginField = {
  type: string,
  id: string,
  name: string,
  placeholder: string,
  label: string,
  required: boolean,
};

export const loginConstant: LoginField[] = [
  {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Email Address",
    label: "Email Address",
    required: true,
  },
  {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Password",
    label: "Password",
    required: true,
  },
];

type ContactContent = {
  id: string,
  type: string,
  name: string,
  className: string,
  placeholder: string,
  required: boolean,
};

const contactContent: ContactContent[] = [
  {
    id: "fullname",
    type: "text",
    name: "fullname",
    className: "fullname",
    placeholder: "Your Name / Company Name",
    required: true,
  },
  {
    id: "email",
    type: "email",
    name: "email",
    className: "email",
    placeholder: "Email Address",
    required: true,
  },
  {
    id: "address",
    type: "text",
    name: "address",
    className: "address",
    placeholder: "Address",
    required: true,
  },
  {
    id: "issue",
    type: "text",
    name: "issue",
    className: "issue",
    placeholder: "What can we do to help you?",
    required: true,
  },
];

export default contactContent;

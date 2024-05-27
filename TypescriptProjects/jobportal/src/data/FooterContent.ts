type FooterLink = {
  id: number,
  text: string,
  href: string,
};

export const footerLink: FooterLink[] = [
  { id: 1, text: "About Us", href: "about-us" },
  { id: 2, text: "Privacy Policy", href: "privacy-policy" },
  { id: 3, text: "Terms and Conditions", href: "terms-and-conditions" },
  { id: 4, text: "Contact", href: "contact" },
];

type FooterContent = {
  footerDesc: string,
};

export const footerContent: FooterContent = {
  footerDesc: "2024 Job Portal. All rights reserved.",
};

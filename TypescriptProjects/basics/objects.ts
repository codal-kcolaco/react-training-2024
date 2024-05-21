const createUser = ({ name: string, isPaid: boolean }) => {};

createUser({ name: "Kevin", isPaid: false });

const createCourse = (): { name: string; price: number } => {
  return { name: "React", price: 4000 };
};

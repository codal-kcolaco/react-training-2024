type User = {
  name: String;
  email: String;
  isActive: Boolean;
};

const createUser = (user: User): User => {
  return { name: "Kevin", email: "kcoalaco@ypomail.com", isActive: true };
};

createUser({ name: "", email: "", isActive: true });

type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

type cardId = {
  cardId: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardId &
  cardDate & {
    cvv: number;
  };

let myUser: User2 = {
  _id: "12345",
  name: "Kevin",
  email: "kcolaco@yopmail.com",
  isActive: true,
};

myUser.name = "Sambhav";
// myUser._id = "23"; // cannot change value of id

console.log(myUser);

export {};

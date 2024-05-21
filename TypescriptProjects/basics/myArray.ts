const names = ["Kevin", "Sambhav"];
const surnames: string[] = [];
const age: number[] = [];

names.push("Rahul");
surnames.push("Ramnani");
age.push(19);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

const MLModels: number[][] = [[255, 255, 255]];

allUsers.push({ name: "Kevin", isActive: false });

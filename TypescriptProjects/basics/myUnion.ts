let score: number | string = 33;

score = 44;

score = "NA";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let kevin: User | Admin = { name: "Kevin", id: 1 };

const getDBByid = (id: number | string) => {
  if (typeof id == "string") {
    id.toLowerCase();
  }
};

const data: (string | number)[] = [1, 2, 3, "4"];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "middle";
seatAllotment = "crew"; // cannot do

export {};

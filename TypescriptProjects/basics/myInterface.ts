interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  age?: number;

  startTrial: () => string;
  finishTrial(): string;
  getCoupon(name: string): number;
}

// reopening of interface
interface User {
  githubToken?: string;
}

// inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const kevin: Admin = {
  role: "admin",
  dbId: 1,
  email: "k@gmail.com",
  userId: 110,
  startTrial: () => {
    return "Trial started";
  },
  finishTrial: () => {
    return "finished";
  },
  getCoupon: (name: "kevin") => {
    return 10;
  },
};

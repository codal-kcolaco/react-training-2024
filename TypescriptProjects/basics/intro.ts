// initializing variables

let myName: string = "Kevin";

console.log(myName);

// creating functions
let loginUser = (email: String, password: String, isPaid: boolean = false) => {
  console.log(email, password, isPaid);
};

loginUser("kcolaco@yopmail.com", "Kevin");

let getValue = (myVal: number): boolean => {
  if (myVal > 5) {
    return true;
  }

  return false;
};

console.log(getValue(5));

let consoleError = (errMsg: string): void => {
  console.log(errMsg);
};

let handleError = (errMsg: string): never => {
  throw new Error(errMsg);
};

consoleError("test");
handleError("test");
export {};

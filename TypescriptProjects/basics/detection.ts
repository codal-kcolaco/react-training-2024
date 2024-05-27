// type narrowing
const detectType = (val: number | string) => {
  if (typeof val == "string") {
    return val.toLowerCase();
  }

  return val + 1;
};

interface User {
  name: string;
  age: number;
}

interface Admin {
  name: string;
  age: number;
  isAdmin: boolean;
}

// in operator narrowing
const isAdminAccount = (account: User | Admin) => {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
};

// instanceof narrowing
const logValue = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  }
};

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};

// type predicates
const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

const getFood = (pet: Fish | Bird) => {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "Bird food";
  }
};

// Discriminated union
interface Circle {
  kind: "circle";
  radius: number;
}

interface Sqaure {
  kind: "sqaure";
  side: number;
}

type Shape = Circle | Sqaure;

const getTrueShape = (shape: Shape) => {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  return shape.side * shape.side;
};

const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "sqaure":
      return shape.side * shape.side;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
};

const score: Array<number> = []; // example of generics
const names: Array<string> = []; // example of generics

function identity<T>(val: T): T {
  return val;
}

const identityA = <T>(val: T): T =>  {
  return val;
};

interface Bottle {
  brand: string;
  type: number;
}

identity<Bottle>({
  brand: "test",
  type: 2,
});

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

// using arrow functions
const getMoreSearchProucts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
    connection: string,
    username: string,
    password: string
}

const anotherFunc = <T, U>(valOne: T, valTwo: U extends Database): object => {
    return {
        valOne, 
        valTwo
    }
}

anotherFunc(3, {})
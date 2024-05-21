let tupleUser: [string, number, boolean];

tupleUser = ["Kevin", 12, true];

let rgb: [number, number, number];
rgb = [255, 255, 255];
rgb = [255, 255, 255, 0]; // cannot do this

type User = [number, string];

const newUser: User = [112, "kcoalco@yopmil.com"];

newUser[1] = "test@gmail.com";
newUser.push(true);

export {};

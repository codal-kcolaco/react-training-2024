"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (user) {
    return { name: "Kevin", email: "kcoalaco@ypomail.com", isActive: true };
};
createUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12345",
    name: "Kevin",
    email: "kcolaco@yopmail.com",
    isActive: true,
};
myUser.name = "Sambhav";
// myUser._id = "23"; // cannot change value of id
console.log(myUser);

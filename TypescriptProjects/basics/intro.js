"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myName = "Kevin";
console.log(myName);
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(email, password, isPaid);
};
loginUser("kcolaco@yopmail.com", "Kevin");

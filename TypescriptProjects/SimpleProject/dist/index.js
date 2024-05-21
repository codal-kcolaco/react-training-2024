"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        return "delete token";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("More than 1");
        }
        this.courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const kevin = new User("kc@gmail.com", "kevin");
console.log(kevin);

class User {
  protected _courseCount = 1;
  constructor(private email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  private deleteToken(): string {
    return "delete token";
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 2;
  }
}

const kevin = new User("kc@gmail.com", "kevin");
console.log(kevin);

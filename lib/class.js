"use strict;"

const User = class {
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }
  greet() {
    return `Hello. I'm ${this.name} and ${this.age} years old. Nice to see you!`;
  }
};

export {
  User
};

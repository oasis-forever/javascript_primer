"use strict;"

const User = class {
  constructor(name, age) {
    this._name = name;
    this._age  = age;
    this.method = () => {
      return "This is an instance object method!!";
    }
  }
  greet() {
    return `Hello. I'm ${this.name} and ${this.age} years old. Nice to see you!`;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  set name(newName) {
    this._name = newName;
  }
  set age(newAge) {
    this._age = newAge;
  }
  static classMethod() {
    return "This is a class method!!";
  }
  method() {
    return "This is a prototype method!!";
  }
};

export {
  User
};

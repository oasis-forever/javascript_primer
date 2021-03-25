import {
  User
} from "../lib/class";

test("User class", () => {
  const user_1 = new User("Noel Gallagher", 53);
  const user_2 = new User("Liam Gallagher", 48);
  expect(user_1 instanceof User).toBe(true);
  expect(user_1.name).toBe("Noel Gallagher");
  expect(user_1.age).toBe(53);
  expect(user_1.greet()).toBe("Hello. I'm Noel Gallagher and 53 years old. Nice to see you!");
  expect(user_2 instanceof User).toBe(true);
  expect(user_2.name).toBe("Liam Gallagher");
  expect(user_2.age).toBe(48);
  expect(user_2.greet()).toBe("Hello. I'm Liam Gallagher and 48 years old. Nice to see you!");
  expect(user_1.greet === user_2.greet).toBe(true);
  // Getter
  const user_3 = new User("UserA", 30);
  expect(user_3.name).toBe("UserA");
  expect(user_3.age).toBe(30);
  // Setter
  user_3.name = "UserB";
  user_3.age  = 40;
  expect(user_3.name).toBe("UserB");
  expect(user_3.age).toBe(40);
  expect(User.classMethod()).toBe("This is a class method!!");
  const user_4 = new User("Conflict methods", 0);
  expect(user_4.method()).toBe("This is an instance object method!!");
  delete user_4.method;
  expect(user_4.method()).toBe("This is a prototype method!!");
  expect(typeof User.prototype.method).toBe("function");
  expect(User.prototype.constructor).toBe(User);
  const user_5 = new User("Prototype chain", 0);
  const UserPrototype = Object.getPrototypeOf(user_5);
  expect(UserPrototype === User.ptototype).toBe(true);
  const protoType1 = Object.getPrototypeOf(user_5);
  expect(user_5.method === User.method).toBe(true);
});

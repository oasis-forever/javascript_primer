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
});
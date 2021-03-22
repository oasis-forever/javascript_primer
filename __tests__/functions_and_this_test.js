import {
  getGreetingMessage,
  greet,
  userTitle1,
  userTitle2
} from "../lib/functions_and_this";

test("Greeting 1", () => {
  const userName = "Noel Gallagher";
  const greeting = getGreetingMessage(userName);
  expect(greeting).toBe("Hi, I'm Noel Gallagher. Nice to see you!");
});

test("Greeting 2", () => {
  const user = { name: "Noel Gallagher" };
  const greeting_1 = greet.call(user, "Nice to see you!");
  const greeting_2 = greet.apply(user, ["Nice to see you!"]);
  const greeting_3 = greet.bind(user, "Nice to see you!");
  expect(greeting_1).toBe("Hi, I'm Noel Gallagher. Nice to see you!");
  expect(greeting_2).toBe("Hi, I'm Noel Gallagher. Nice to see you!");
  expect(greeting_3()).toBe("Hi, I'm Noel Gallagher. Nice to see you!");
});

test("Users with a title", () => {
  const users_1 = userTitle1.addTitle(["Noel Gallagher", "Liam Gallagher"])
  const users_2 = userTitle2.addTitle(["Noel Gallagher", "Liam Gallagher"])
  expect(users_1).toStrictEqual(["Mr. Noel Gallagher", "Mr. Liam Gallagher"])
  expect(users_2).toStrictEqual(["Mr. Noel Gallagher", "Mr. Liam Gallagher"])
});

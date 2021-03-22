import {
  getGreetingMessage,
  greet
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

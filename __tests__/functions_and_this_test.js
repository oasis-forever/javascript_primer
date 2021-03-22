import {
  getGreetingMessage
} from "../lib/functions_and_this";

test("Greeting 1", () => {
  const userName = "Noel Gallagher";
  const greeting = getGreetingMessage(userName);
  expect(greeting).toBe("Hi, I'm Noel Gallagher. Nice to see you!");
});

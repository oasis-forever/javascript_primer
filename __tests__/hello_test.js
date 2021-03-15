import { hello } from "../lib/hello";

test("Hello", () => {
  const message = hello("Oasist");
  expect(message).toBe("Hello, Oasist");
});

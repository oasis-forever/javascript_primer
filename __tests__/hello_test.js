"use strict;"

import { hello } from "../lib/hello";

test("hello", () => {
  const message = hello("Oasist");
  expect(message).toBe("Hello, Oasist");
});

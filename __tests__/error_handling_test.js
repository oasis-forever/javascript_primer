import {
  handleError1,
  handleError2
} from "../lib/error_handling";

test("handleError1", () => {
  const error = handleError1();
  expect(error instanceof ReferenceError).toBe(true);
  expect(error.message).toBe("undefinedFunction is not defined");
});

test("handleError2", () => {
  const message = handleError2();
  expect(message).toBe("This line is executed every time.");
});

import {
  handleError1
} from "../lib/error_handling";

test("handleError1", () => {
  const error = handleError1();
  expect(error instanceof ReferenceError).toBe(true);
  expect(error.message).toBe("undefinedFunction is not defined");
});

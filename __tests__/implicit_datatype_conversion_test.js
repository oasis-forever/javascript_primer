import {
  addBoolean,
} from "../lib/implicit_datatype_conversion";

// Num plus boolean
test("Num plus boolean", () => {
  const sum_1 = addBoolean(1, true);
  const sum_2 = addBoolean(1, false);
  expect(sum_1).toBe(2);
  expect(sum_2).toBe(1);
});


import {
  addInWhile1,
  addInWhile2,
  addInFor1
} from "../lib/loops";

// While
test("Add in while 1", () => {
  const sum = addInWhile1();
  expect(sum).toBe(55);
});

test("Add in while 2", () => {
  const sum = addInWhile2();
  expect(sum).toBe(55);
});

// For
test("Add in for 1", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const sum = addInWhile1(nums);
  expect(sum).toBe(55);
});

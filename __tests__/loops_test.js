import {
  addInWhile1,
  addInWhile2,
  addInFor,
  addInForEach
} from "../lib/loops";

// While
test("Add in while 1", () => {
  const sum = addInWhile1(0, 10);
  expect(sum).toBe(55);
});

test("Add in while 2", () => {
  const sum = addInWhile2(0, 10);
  expect(sum).toBe(55);
});

// For
test("Add in for", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const sum  = addInFor(nums);
  expect(sum).toBe(55);
});

// ForEach
test("Add in for", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const sum  = addInForEach(nums);
  expect(sum).toBe(55);
});

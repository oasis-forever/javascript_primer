import {
  addInWhile1,
  addInWhile2
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

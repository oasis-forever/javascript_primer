"use strict;"

import {
  getRandom,
  getMax
} from "../lib/math";

test("getRandom", () => {
  const random = getRandom(10, 0);
  expect(typeof random).toBe("number");
});

test("getMax", () => {
  const nums = [...Array(10).keys()].map(num => ++num);
  const max  = getMax(nums);
  expect(max).toBe(10);
});

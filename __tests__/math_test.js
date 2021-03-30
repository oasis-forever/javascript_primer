"use strict;"

import {
  getRandom,
  getMax,
  getMin
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

test("getMin", () => {
  const nums = [...Array(10).keys()].map(num => ++num);
  const max  = getMin(nums);
  expect(max).toBe(1);
});

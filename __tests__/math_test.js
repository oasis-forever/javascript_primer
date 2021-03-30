"use strict;"

import {
  getRandom,
  getMax,
  getMin,
  getFloor
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

test("getFloor", () => {
  const float_1 = 1.3
  const float_2 = -1.3
  const floor_1 = getFloor(float_1);
  const floor_2 = getFloor(float_2);
  expect(floor_1).toBe(1.0);
  expect(floor_2).toBe(-2.0);
});

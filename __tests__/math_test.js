"use strict;"

import {
  getRandom
} from "../lib/math";

test("getRandom", () => {
  const random = getRandom(10, 0);
  expect(typeof random).toBe("number");
});

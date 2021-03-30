"use strict;"

import {
  getDate
} from "../lib/date";

test("newDate", () => {
  const date = getDate(1136214245999);
  expect(date.toISOString()).toBe("2006-01-02T15:04:05.999Z");
  const inUTC = getDate("2006-01-02T15:04:05.999Z");
  expect(inUTC.toISOString()).toBe("2006-01-02T15:04:05.999Z");
  const dateInTokyo = new Date("2006-01-02T15:04:05.999");
  expect(dateInTokyo.toISOString()).toBe("2006-01-02T06:04:05.999Z");
  const today = new Date(2020, 2, 31, 0, 0, 0);
  expect(today.toISOString()).toBe("2020-03-31T06:00:00.000Z");
});

"use strict;"

import {
  newMap
} from "../lib/map_and_set";

test("newMap", () => {
  const entry = [
    ["key_1", "value_1"],
    ["key_2", "value_2"]
  ];
  const map = newMap(entry);
  expect(map.get("key_1")).toBe("value_1");
  expect(map.get("key_2")).toBe("value_2");
});

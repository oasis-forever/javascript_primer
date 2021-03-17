import {
  addBoolean,
  logicalEqual,
  addString,
  substractString,
  addMultipulStrings,
  convertToBoolean
} from "../lib/implicit_datatype_conversion";

test("Num plus boolean", () => {
  const sum_1 = addBoolean(1, true);
  const sum_2 = addBoolean(1, false);
  expect(sum_1).toBe(2);
  expect(sum_2).toBe(1);
});

test("Logical equal", () => {
  const result_1 = logicalEqual(1, true);
  const result_2 = logicalEqual(0, false);
  const result_3 = logicalEqual(100, "100");
  const result_4 = logicalEqual(100, [100]);
  const result_5 = logicalEqual(100, ["100"]);
  expect(result_1).toBe(true);
  expect(result_2).toBe(true);
  expect(result_3).toBe(true);
  expect(result_4).toBe(true);
  expect(result_5).toBe(true);
});

test("Add string", () => {
  const result_1 = addString(1, "1");
  const result_2 = addString("1", "1");
  expect(result_1).toBe("11");
  expect(result_2).toBe("11");
});

test("Substract string", () => {
  const result_1 = substractString(2, "1");
  const result_2 = substractString("2", "1");
  expect(result_1).toBe(1);
  expect(result_2).toBe(1);
});

test("Add multipul strings", () => {
  const result_1 = addMultipulStrings(1, 2, "3");
  const result_2 = addMultipulStrings("1", 2, 3);
  const result_3 = addMultipulStrings(1, "2", 3);
  expect(result_1).toBe("33");
  expect(result_2).toBe("123");
  expect(result_3).toBe("123");
});

test("Convert to boolean", () => {
  const result_1 = convertToBoolean("string");
  const result_2 = convertToBoolean(1);
  const result_3 = convertToBoolean({});
  const result_4 = convertToBoolean(0);
  const result_5 = convertToBoolean("");
  const result_6 = convertToBoolean(null);
  expect(result_1).toBe(true);
  expect(result_2).toBe(true);
  expect(result_3).toBe(true);
  expect(result_4).toBe(false);
  expect(result_5).toBe(false);
  expect(result_6).toBe(false);
});

import {
  addBoolean,
  logicalEqual,
  addAnotherType,
  substractAnotherType,
  addMultipulTypes,
  convertToBoolean,
  convertToString
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
  const result_1 = addAnotherType(1, "1");
  const result_2 = addAnotherType("1", "1");
  expect(result_1).toBe("11");
  expect(result_2).toBe("11");
});

test("Substract string", () => {
  const result_1 = substractAnotherType(2, "1");
  const result_2 = substractAnotherType("2", "1");
  expect(result_1).toBe(1);
  expect(result_2).toBe(1);
});

test("Add multipul strings", () => {
  const result_1 = addMultipulTypes(1, 2, "3");
  const result_2 = addMultipulTypes("1", 2, 3);
  const result_3 = addMultipulTypes(1, "2", 3);
  expect(result_1).toBe("33");
  expect(result_2).toBe("123");
  expect(result_3).toBe("123");
});

test("Convert to boolean", () => {
  // Non falsy
  const bool_1 = convertToBoolean("string");
  const bool_2 = convertToBoolean(1);
  const bool_3 = convertToBoolean({});
  expect(bool_1).toBe(true);
  expect(bool_2).toBe(true);
  expect(bool_3).toBe(true);
  // Falsy
  const bool_4 = convertToBoolean(0);
  const bool_5 = convertToBoolean("");
  const bool_6 = convertToBoolean(null);
  expect(bool_4).toBe(false);
  expect(bool_5).toBe(false);
  expect(bool_6).toBe(false);
});

test("Convert to string", () => {
  // Primitive
  const str_1 = convertToString("String");
  const str_2 = convertToString(true);
  const str_3 = convertToString(null);
  const str_4 = convertToString(undefined);
  const str_5 = convertToString(Symbol("Symbol"));
  expect(str_1).toBe("String");
  expect(str_2).toBe("true");
  expect(str_3).toBe("null");
  expect(str_4).toBe("undefined");
  expect(str_5).toBe("Symbol(Symbol)");
  // Non primitive
  const str_6 = convertToString([1, 2, 3]);
  const str_7 = convertToString({ key: "value" });
  const str_8 = convertToString(function() {});
  expect(str_6).toBe("1,2,3");
  expect(str_7).toBe("[object Object]");
  expect(str_8).toBe("function () {}");
});

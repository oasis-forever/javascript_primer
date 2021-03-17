import {
  add,
  substract,
  multiply,
  modulusCalc,
  raise,
  plus,
  minus,
  increment,
  decrement,
  strictEqualityOperator,
  strictInequalityOperator,
  equalityOperator,
  inequalityOperator,
  greater_than,
  greater_than_or_equal_to,
  less_than,
  less_than_or_equal_to,
  bitAND,
  bitOR,
  bitXOR,
  bitNOT,
  leftShift,
  rightShift,
  zeroRightShift,
  assignObj,
  logicalAND,
  logicalOR,
  logicalNOT,
  logicalDoubleNOT,
  coalesceNullishValues,
  ternaryOperator
} from "../lib/operands";

// Binary operators
test("Addition", () => {
    const sum_1 = add(100, 200);
    const sum_2 = add(10, 0.5);
    const str  = add("Java", "Script");
    expect(sum_1).toBe(300);
    expect(sum_2).toBe(10.5);
    expect(str).toBe("JavaScript");
});

test("Substraction", () => {
    const diff_1 = substract(300, 200);
    const diff_2 = substract(10, 0.5);
    expect(diff_1).toBe(100);
    expect(diff_2).toBe(9.5);
});

test("Multiplication", () => {
    const product_1 = multiply(300, 200);
    const product_2 = multiply(10, 0.5);
    expect(product_1).toBe(60000);
    expect(product_2).toBe(5);
});

test("Devision", () => {
    const quotient_1 = multiply(300, 200);
    const quotient_2 = multiply(10, 0.5);
    expect(quotient_1).toBe(60000);
    expect(quotient_2).toBe(5);
});

test("Modulus calculation", () => {
    const residue_1 = modulusCalc(300, 100);
    const residue_2 = modulusCalc(10, 3);
    expect(residue_1).toBe(0);
    expect(residue_2).toBe(1);
});

test("Raise", () => {
    const result = raise(4, 4);
    expect(val).toBe(256);
});

// Unary operators
test("Plus operator", () => {
    const result_1 = plus("100");
    const result_2 = plus("String");
    expect(result_1).toBe(100);
    expect(Number.isNaN(result_2)).toBe(true);
});

test("Minus operator", () => {
    const result_1 = minus("100");
    const result_2 = minus("String");
    expect(result_1).toBe(-100);
    expect(Number.isNaN(result_2)).toBe(true);
});

test("Incrementation", () => {
    const vals = increment(1);
    const result_1 = vals[0];
    const num_1 = vals[1];
    const result_2 = vals[2];
    const num_2 = vals[3];
    expect(result_1).toBe(1);
    expect(num_1).toBe(2);
    expect(result_2).toBe(2);
    expect(num_2).toBe(2);
});

test("Decrementation", () => {
    const vals = decrement(1);
    const result_1 = vals[0];
    const num_1 = vals[1];
    const result_2 = vals[2];
    const num_2 = vals[3];
    expect(result_1).toBe(1);
    expect(num_1).toBe(0);
    expect(result_2).toBe(0);
    expect(num_2).toBe(0);
});

// Comparative operator
test("Strict equality operator", () => {
    const result_1 = strictEqualityOperator(1, 1);
    const result_2 = strictEqualityOperator(1, "1");
    const obj_1 = {};
    const obj_2 = {};
    const result_3 = strictEqualityOperator(obj_1, obj_2);
    const result_4 = strictEqualityOperator(obj_1, obj_1);
    expect(result_1).toBe(true);
    expect(result_2).toBe(false);
    expect(result_3).toBe(false);
    expect(result_4).toBe(true);
});

test("Strict inequality operator", () => {
    const result_1 = strictInequalityOperator(1, 1);
    const result_2 = strictInequalityOperator(1, "1");
    const obj_1 = {};
    const obj_2 = {};
    const result_3 = strictInequalityOperator(obj_1, obj_2);
    const result_4 = strictInequalityOperator(obj_1, obj_1);
    expect(result_1).toBe(false);
    expect(result_2).toBe(true);
    expect(result_3).toBe(true);
    expect(result_4).toBe(false);
});

test("Equality operator", () => {
    const result_1 = equalityOperator(1, 1);
    const result_2 = equalityOperator(1, "1");
    const result_3 = equalityOperator(0, false);
    const result_4 = equalityOperator(0, null);
    const result_5 = equalityOperator(null, undefined);
    const obj_1 = {};
    const obj_2 = {};
    const result_6 = equalityOperator(obj_1, obj_2);
    const result_7 = equalityOperator(obj_1, obj_1);
    expect(result_1).toBe(true);
    expect(result_2).toBe(true);
    expect(result_3).toBe(true);
    expect(result_4).toBe(false);
    expect(result_5).toBe(true);
    expect(result_6).toBe(false);
    expect(result_7).toBe(true);
});

test("Inequality operator", () => {
    const result_1 = inequalityOperator(1, 1);
    const result_2 = inequalityOperator(1, "01");
    const result_3 = inequalityOperator(0, false);
    const result_4 = inequalityOperator(0, null);
    const result_5 = inequalityOperator(null, undefined);
    const obj_1 = {};
    const obj_2 = {};
    const result_6 = inequalityOperator(obj_1, obj_2);
    const result_7 = inequalityOperator(obj_1, obj_1);
    expect(result_1).toBe(false);
    expect(result_2).toBe(false);
    expect(result_3).toBe(false);
    expect(result_4).toBe(true);
    expect(result_5).toBe(false);
    expect(result_6).toBe(true);
    expect(result_7).toBe(false);
});

test("Greater than", () => {
  const result_1 = greater_than(20, 10);
  const result_2 = greater_than(10, 20);
  expect(result_1).toBe(true);
  expect(result_2).toBe(false);
});

test("Greater than or equal to", () => {
  const result_1 = greater_than_or_equal_to(20, 10);
  const result_2 = greater_than_or_equal_to(10, 20);
  const result_3 = greater_than_or_equal_to(20, 20);
  expect(result_1).toBe(true);
  expect(result_2).toBe(false);
  expect(result_3).toBe(true);
});

test("Less than", () => {
  const result_1 = less_than(20, 10);
  const result_2 = less_than(10, 20);
  expect(result_1).toBe(false);
  expect(result_2).toBe(true);
});

test("Less than or equal to", () => {
  const result_1 = less_than_or_equal_to(20, 10);
  const result_2 = less_than_or_equal_to(10, 20);
  const result_3 = less_than_or_equal_to(20, 20);
  expect(result_1).toBe(false);
  expect(result_2).toBe(true);
  expect(result_3).toBe(true);
});

// Bit operators
test("Bit AND", () => {
  const result_1 = bitAND(15, 9);
  const result_2 = bitAND(0b1111, 0b1001);
  expect(result_1).toBe(9);
  expect(result_2).toBe(0b1001);
});

test("Bit OR", () => {
  const result_1 = bitOR(15, 9);
  const result_2 = bitOR(0b1111, 0b1001);
  expect(result_1).toBe(15);
  expect(result_2).toBe(0b1111);
});

test("Bit XOR", () => {
  const result_1 = bitXOR(15, 9);
  const result_2 = bitXOR(0b1111, 0b1001);
  expect(result_1).toBe(6);
  expect(result_2).toBe(0b0110);
});

test("Bit NOT", () => {
  const result_1 = bitNOT(15);
  const result_2 = bitNOT(0b1111);
  const result_3 = bitNOT(0);
  const result_4 = bitNOT(-1);
  expect(result_1).toBe(-16);
  expect(result_2).toBe(-0b10000);
  expect(result_3).toBe(-1);
  expect(result_4).toBe(0);
});

test("Left shift", () => {
  const result_1 = leftShift(9, 2);
  const result_2 = leftShift(0b1111, 2);
  expect(result_1).toBe(36);
  expect(result_2).toBe(0b111100);
});

test("Right shift", () => {
  const result = rightShift(-9, 2);
  expect(val).toBe(-3);
});

test("Zero right shift", () => {
  const result = zeroRightShift(-9, 2);
  expect(val).toBe(1073741821);
});

// Assignment operators
test("Assign object", () => {
  const obj = assignObj("Hayato");
  const { name } = obj;
  const cloneName = obj.name;
  expect(name === cloneName).toBe(true);
});

// Logical operators
test("Logical AND", () => {
  const result_1 = logicalAND(true, "Foo");
  const result_2 = logicalAND(false, "Foo");
  const result_3 = logicalAND("Bar", "Foo");
  const result_4 = logicalAND(100, "Foo");
  const result_5 = logicalAND("", "Foo");
  const result_6 = logicalAND(0, "Foo");
  const result_7 = logicalAND(null, "Foo");
  expect(result_1).toBe("Foo");
  expect(result_2).toBe(false);
  expect(result_3).toBe("Foo");
  expect(result_4).toBe("Foo");
  expect(result_5).toBe("");
  expect(result_6).toBe(0);
  expect(result_7).toBe(null);
});

test("Logical OR", () => {
  const result_1 = logicalOR(true, "Foo");
  const result_2 = logicalOR(false, "Foo");
  const result_3 = logicalOR("Bar", "Foo");
  const result_4 = logicalOR(100, "Foo");
  const result_5 = logicalOR("", "Foo");
  const result_6 = logicalOR(0, "Foo");
  const result_7 = logicalOR(null, "Foo");
  expect(result_1).toBe(true);
  expect(result_2).toBe("Foo");
  expect(result_3).toBe("Bar");
  expect(result_4).toBe(100);
  expect(result_5).toBe("Foo");
  expect(result_6).toBe("Foo");
  expect(result_7).toBe("Foo");
});

test("Logical NOT", () => {
  const result_1 = logicalNOT(true);
  const result_2 = logicalNOT(false);
  const result_3 = logicalNOT(0);
  const result_4 = logicalNOT("");
  const result_5 = logicalNOT(null);
  const result_6 = logicalNOT(100);
  const result_7 = logicalNOT("Foo");
  expect(result_1).toBe(false);
  expect(result_2).toBe(true);
  expect(result_3).toBe(true);
  expect(result_4).toBe(true);
  expect(result_5).toBe(true);
  expect(result_6).toBe(false);
  expect(result_7).toBe(false);
});

test("Logical double NOT", () => {
  const result = logicalNOT("Foo");
  expect(val).toBe(false);
});

test("Coalesce nullish values", () => {
  const result_1 = coalesceNullishValues(null, "Foo");
  const result_2 = coalesceNullishValues(undefined, "Foo");
  const result_3 = coalesceNullishValues(true, "Foo");
  const result_4 = coalesceNullishValues(false, "Foo");
  const result_5 = coalesceNullishValues(0, "Foo");
  const result_6 = coalesceNullishValues("Bar", "Foo");
  expect(result_1).toBe("Foo");
  expect(result_2).toBe("Foo");
  expect(result_3).toBe(true);
  expect(result_4).toBe(false);
  expect(result_5).toBe(0);
  expect(result_6).toBe("Bar");
});

test("Ternary operator", () => {
  const result_1 = ternaryOperator(true, "Foo", "Bar");
  const result_2 = ternaryOperator(false, "Foo", "Bar");
  expect(result_1).toBe("Foo");
  expect(result_2).toBe("Bar");
});

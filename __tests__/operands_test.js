import {
  add,
  substract,
  multiply,
  modulusCalc,
  raise,
  plus,
  minus,
  increment,
  decrement
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
    const val = raise(4, 4);
    expect(val).toBe(256);
});

// Unary operators
test("Plus operator", () => {
    const val_1 = plus("100");
    const val_2 = plus("String");
    expect(val_1).toBe(100);
    expect(Number.isNaN(val_2)).toBe(true);
});

test("Minus operator", () => {
    const val_1 = minus("100");
    const val_2 = minus("String");
    expect(val_1).toBe(-100);
    expect(Number.isNaN(val_2)).toBe(true);
});

test("Incrementation", () => {
    const vals = increment(1);
    const val_1 = vals[0];
    const num_1 = vals[1];
    const val_2 = vals[2];
    const num_2 = vals[3];
    expect(val_1).toBe(1);
    expect(num_1).toBe(2);
    expect(val_2).toBe(2);
    expect(num_2).toBe(2);
});

test("Decrementation", () => {
    const vals = decrement(1);
    const val_1 = vals[0];
    const num_1 = vals[1];
    const val_2 = vals[2];
    const num_2 = vals[3];
    expect(val_1).toBe(1);
    expect(num_1).toBe(0);
    expect(val_2).toBe(0);
    expect(num_2).toBe(0);
});

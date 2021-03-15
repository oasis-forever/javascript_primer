import {
  add,
  substract,
  multiply,
  modulusCalc,
  raise
} from "../lib/operands";

// Binary operators
test("Addition", () => {
    const sum_1 = add(100, 200);
    const sum_2 = add(10, 0.5)
    const str  = add("Java", "Script")
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

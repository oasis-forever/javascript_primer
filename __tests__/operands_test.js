import {
  add,
  substract,
  multiply,
  modulus_calc,
  raise
} from "../lib/operands";

// Binary operators
test("Addition", () => {
    const sum1 = add(100, 200);
    const sum2 = add(10, 0.5)
    const str  = add("Java", "Script")
    expect(sum1).toBe(300);
    expect(sum2).toBe(10.5);
    expect(str).toBe("JavaScript");
});

test("Substraction", () => {
    const diff1 = substract(300, 200);
    const diff2 = substract(10, 0.5);
    expect(diff1).toBe(100);
    expect(diff2).toBe(9.5);
});

test("Multiplication", () => {
    const product1 = multiply(300, 200);
    const product2 = multiply(10, 0.5);
    expect(product1).toBe(60000);
    expect(product2).toBe(5);
});

test("Devision", () => {
    const quotient1 = multiply(300, 200);
    const quotient2 = multiply(10, 0.5);
    expect(quotient1).toBe(60000);
    expect(quotient2).toBe(5);
});

test("Modulus calculation", () => {
    const residue1 = modulus_calc(300, 100);
    const residue2 = modulus_calc(10, 3);
    expect(residue1).toBe(0);
    expect(residue2).toBe(1);
});

test("Raise", () => {
    const val = raise(4, 4);
    expect(val).toBe(256);
});

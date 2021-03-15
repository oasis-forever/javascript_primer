"use strict";

// Binary operators
const add = (arg1, arg2) => {
  const sum = arg1 + arg2;
  return sum;
};

const substract = (arg1, arg2) => {
  const diff = arg1 - arg2;
  return diff;
};

const multiply = (arg1, arg2) => {
  const product = arg1 * arg2;
  return product;
};

const devide = (arg1, arg2) => {
  const quotient = arg1 / arg2;
  return quotient;
};

const modulus_calc = (arg1, arg2) => {
  const residue = arg1 % arg2;
  return residue;
};

const raise = (arg1, arg2) => {
  const val = arg1 ** arg2;
  return val;
};

export {
  add,
  substract,
  multiply,
  modulus_calc,
  raise
};

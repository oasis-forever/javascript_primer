"use strict";

// Binary operators
const add = (arg_1, arg_2) => {
  const sum = arg_1 + arg_2;
  return sum;
};

const substract = (arg_1, arg_2) => {
  const diff = arg_1 - arg_2;
  return diff;
};

const multiply = (arg_1, arg_2) => {
  const product = arg_1 * arg_2;
  return product;
};

const devide = (arg_1, arg_2) => {
  const quotient = arg_1 / arg_2;
  return quotient;
};

const modulusCalc = (arg_1, arg_2) => {
  const residue = arg_1 % arg_2;
  return residue;
};

const raise = (arg_1, arg_2) => {
  const val = arg_1 ** arg_2;
  return val;
};

export {
  add,
  substract,
  multiply,
  modulusCalc,
  raise
};

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

// Unary operators
const plus = (arg) => {
  const val = +arg;
  return val;
};

const minus = (arg) => {
  const val = -arg;
  return val;
};

const increment = (init_val) => {
  let num_1 = init_val;
  const val_1 = num_1++;
  let num_2 = init_val;
  const val_2 = ++num_2;
  return [val_1, num_1, val_2, num_2];
};

const decrement = (init_val) => {
  let num_1 = init_val;
  const val_1 = num_1--;
  let num_2 = init_val;
  const val_2 = --num_2;
  return [val_1, num_1, val_2, num_2];
};

// Comparative operators
const strictEqualityOperator = (arg_1, arg_2) => {
  const val = arg_1 === arg_2;
  return val;
};

const strictInequalityOperator = (arg_1, arg_2) => {
  const val = arg_1 !== arg_2;
  return val;
};

const equalityOperator = (arg_1, arg_2) => {
  const val = arg_1 == arg_2;
  return val;
};

const inequalityOperator = (arg_1, arg_2) => {
  const val = arg_1 != arg_2;
  return val;
};

const greater_than = (arg_1, arg_2) => {
  const val = arg_1 > arg_2;
  return val;
};

const greater_than_or_equal_to = (arg_1, arg_2) => {
  const val = arg_1 >= arg_2;
  return val;
};

const less_than = (arg_1, arg_2) => {
  const val = arg_1 < arg_2;
  return val;
};

const less_than_or_equal_to = (arg_1, arg_2) => {
  const val = arg_1 <= arg_2;
  return val;
};

// Bit operators
const bitAND = (arg_1, arg_2) => {
  const val = arg_1 & arg_2;
  return val;
};

const bitOR = (arg_1, arg_2) => {
  const val = arg_1 | arg_2;
  return val;
};

const bitXOR = (arg_1, arg_2) => {
  const val = arg_1 ^ arg_2;
  return val;
};

const bitNOT = (arg) => {
  const val = ~ arg;
  return val;
};

const leftShift = (num, shift) => {
  const val = num << shift;
  return val;
};

const rightShift = (num, shift) => {
  const val = num >> shift;
  return val;
};

const zeroRightShift = (num, shift) => {
  const val = num >>> shift;
  return val;
};

export {
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
  zeroRightShift
};

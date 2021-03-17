"use strict";

// Num plus boolean
const addBoolean = (num, bool) => {
  const sum = num + bool;
  return sum;
};

// Logical equal
const logicalEqual = (arg_1, arg_2) => {
  const result = arg_1 == arg_2;
  return result;
};

// Add string
const addString = (arg_1, arg_2) => {
  const result = arg_1 + arg_2;
  return result;
};

export {
  addBoolean,
  logicalEqual,
  addString
};

"use strict";

const addBoolean = (num, bool) => {
  const sum = num + bool;
  return sum;
};

const logicalEqual = (arg_1, arg_2) => {
  const result = arg_1 == arg_2;
  return result;
};

const addString = (arg_1, arg_2) => {
  const result = arg_1 + arg_2;
  return result;
};

const substractString = (arg_1, arg_2) => {
  const result = arg_1 - arg_2;
  return result;
};

const addMultipulStrings = (arg_1, arg_2, arg_3) => {
  const result = arg_1 + arg_2 + arg_3;
  return result;
};

const convertToBoolean  = (arg) => {
  const result = Boolean(arg);
  return result;
};

export {
  addBoolean,
  logicalEqual,
  addString,
  substractString,
  addMultipulStrings,
  convertToBoolean
};

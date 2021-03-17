"use strict";

const addBoolean = (num, bool) => {
  const sum = num + bool;
  return sum;
};

const logicalEqual = (arg_1, arg_2) => {
  const result = arg_1 == arg_2;
  return result;
};

const addAnotherType = (arg_1, arg_2) => {
  const result = arg_1 + arg_2;
  return result;
};

const substractAnotherType = (arg_1, arg_2) => {
  const result = arg_1 - arg_2;
  return result;
};

const addMultipulTypes = (arg_1, arg_2, arg_3) => {
  const result = arg_1 + arg_2 + arg_3;
  return result;
};

const convertToBoolean = (arg) => {
  const result = Boolean(arg);
  return result;
};

const convertToString = (arg) => {
  const result = String(arg);
  return result;
};

export {
  addBoolean,
  logicalEqual,
  addAnotherType,
  substractAnotherType,
  addMultipulTypes,
  convertToBoolean,
  convertToString
};

"use strict;"

const getRandom = (max, min) => {
  return Math.random() * (max - min) + min;
};

const getMax = (nums) => {
  return Math.max(...nums);
};

const getMin = (nums) => {
  return Math.min(...nums);
};

const getFloor = (float) => {
  return Math.floor(float);
};

const getCeil = (float) => {
  return Math.ceil(float);
};

export {
  getRandom,
  getMax,
  getMin,
  getFloor,
  getCeil
};

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

export {
  getRandom,
  getMax,
  getMin
};

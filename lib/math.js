"use strict;"

const getRandom = (max, min) => {
  return Math.random() * (max - min) + min;
};

const getMax = (nums) => {
  return Math.max(...nums);
};

export {
  getRandom,
  getMax
};

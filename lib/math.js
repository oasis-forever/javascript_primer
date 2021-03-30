"use strict;"

const getRandom = (max, min) => {
  return Math.random() * (max - min) + min;
};

export {
  getRandom
};

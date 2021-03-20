"use strict;"

// While
const addInWhile1 = () => {
  let sum = 0;
  let num = 0;
  while (num <= 10) {
    sum += num;
    num += 1;
  };
  return sum;
};

const addInWhile2 = () => {
  let sum = 0;
  let num = 0;
  do {
    sum += num;
    num += 1;
  } while (num <= 10);
  return sum;
};

// for
const addInFor1 = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i + 1;
  };
  return sum;
};

export {
  addInWhile1,
  addInWhile2,
  addInFor1
};

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

export {
  addInWhile1,
  addInWhile2
};

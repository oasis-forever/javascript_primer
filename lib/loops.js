"use strict;"

// While
const addInWhile1 = (init_val, max_val) => {
  let sum = 0;
  let num = init_val;
  while (num <= max_val) {    sum += num;
    num += 1;
  };
  return sum;
};

const addInWhile2 = (init_val, max_val) => {
  let sum = 0;
  let num = init_val;
  do {
    sum += num;
    num += 1;
  } while (num <= max_val);
  return sum;
};

// For
const addInFor = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += i + 1;
  };
  return sum;
};

// ForEach
const addInForEach = (nums) => {
  let sum = 0;
  nums.forEach(num => {
    sum += num;
  });
  return sum;
};

// Break loop
const isEven = (num) => {
  return num % 2 === 0;
};

const isEvenIncluded1 = (nums) => {
  let evenInNums = false;
  for (let i = 0; nums.length; i++) {
    const num = nums[i];
    if (isEven(num)) {
      evenInNums = true;
      break;
    }
  }
  return evenInNums;
};

const isEvenIncluded2 = (nums) => {
  return nums.some(isEven);;
};

export {
  addInWhile1,
  addInWhile2,
  addInFor,
  addInForEach,
  isEvenIncluded1,
  isEvenIncluded2
};

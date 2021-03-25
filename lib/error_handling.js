"use strict;"

const handleError1 = () => {
  try {
    undefinedFunction();
  } catch (error) {
    return error;
  }
};

const handleError2 = () => {
  try {
    undefinedMethod();
  } finally {
    return "This line is executed every time.";
  }
};

export {
  handleError1,
  handleError2
};

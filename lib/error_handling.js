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

const handleError3 = () => {
  try {
    throw new Error("An exception raised!!");
  } catch (error) {
    return error.message;
  }
};

export {
  handleError1,
  handleError2,
  handleError3
};

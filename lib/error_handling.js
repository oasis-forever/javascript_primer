"use strict;"

const handleError1 = () => {
  try {
    undefinedFunction();
  } catch (error) {
    return error;
  }
};

export {
  handleError1
};

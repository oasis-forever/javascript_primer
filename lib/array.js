"use strict;"

// Access elememts
const getVectorElement = (vector, index) => {
  return vector[index];
};

const getMatrixElement = (matrix, y, x) => {
  return matrix[y][x];
};

export {
  getVectorElement,
  getMatrixElement
};

"use strict;"

// Access elememts
const getVectorElement = (vector, index) => {
  return vector[index];
};

const getMatrixElement = (matrix, y, x) => {
  return matrix[y][x];
};

// Index/element reference
const getLangIndex = (langs, lang) => {
  const index = langs.indexOf(lang);
  return index;
};

const isNoel = (singer) => {
  return singer.name === "Noel Gallagher";
};

const getSingerIndex = (singers) => {
  const index = singers.findIndex(isNoel);
  return index;
}

const getSingerElement = (singers) => {
  const elem = singers.find(isNoel);
  return elem;
}

export {
  getVectorElement,
  getMatrixElement,
  getLangIndex,
  getSingerIndex,
  getSingerElement,
};

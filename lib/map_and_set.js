"use strict;"

const newMap = (entry) => {
  const map = new Map(entry);
  return map;
};

const setMap = (key, val) => {
  const map = new Map();
  map.set(key, val);
  return map;
};

export {
  newMap,
  setMap
};

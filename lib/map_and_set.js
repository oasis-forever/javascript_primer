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

const getKeys = (map) => {
  const keys = [];
  for (const key of map.keys()) {
    keys.push(key);
  }
  return keys;
};

export {
  newMap,
  setMap,
  getKeys
};

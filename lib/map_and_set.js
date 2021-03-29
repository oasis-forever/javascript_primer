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

const getValues = (map) => {
  const vals = [];
  for (const val of map.values()) {
    vals.push(val);
  }
  return vals;
};

export {
  newMap,
  setMap,
  getKeys,
  getValues
};

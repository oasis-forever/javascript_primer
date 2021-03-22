"use strict;"

const removeDuplicateSpace = (str) => {
  return str.split(/\s+/).join(" ");
};

const getURLHostName = (url) => {
  const qurtyIndex = url.indexOf("?");
  const host = url.slice(0, qurtyIndex)
  return host;
}

const getURLQueryString = (url) => {
  const qurtyIndex = url.indexOf("?");
  const querystr = url.slice(qurtyIndex + 1)
  return querystr;
}

// Regular expression
const getIndexInSearch = (text, pattern) => {
  const index = text.search(pattern);
  return index;
};

export {
  removeDuplicateSpace,
  getURLHostName,
  getURLQueryString,
  getIndexInSearch
};

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

const getIndexInMatch = (text, pattern) => {
  const result = text.match(pattern);
  return result;
};

const getIndexInMatchAll = (text, pattern) => {
  const info = [];
  const results = text.matchAll(pattern);
  for (const result of results) {
    info.push(`"${result[0]}", ${result[1]}, index: ${result.index}, input: "${result.input}", groups: ${result.groups}`);
  };
  return info;
};

export {
  removeDuplicateSpace,
  getURLHostName,
  getURLQueryString,
  getIndexInSearch,
  getIndexInMatch,
  getIndexInMatchAll
};

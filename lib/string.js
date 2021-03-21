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

export {
  removeDuplicateSpace,
  getURLHostName,
  getURLQueryString
};

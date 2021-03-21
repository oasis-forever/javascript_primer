"use strict;"

const removeDuplicateSpace = (str) => {
  return str.split(/\s+/).join(" ");
};

const getURLHostName = (url) => {
  const qurtyIndex = url.indexOf("?");
  const host = url.slice(0, qurtyIndex)
  return host;
}
export {
  removeDuplicateSpace,
  getURLHostName,
};

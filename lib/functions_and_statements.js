"use strict";

// Fuxntions dealing with a default argument
const defaultArgFunc = (str, prefix = "Default ") => {
  const text = prefix + str;
  return text;
}

const falsyAcceptiveFunc = (str, prefix) => {
  const pre = prefix || "Default "
  const text = pre + str;
  return text;
}

const falsyRejectingFunc = (str, prefix) => {
  const pre = prefix ?? "Default "
  const text = pre + str;
  return text;
}

export {
  defaultArgFunc,
  falsyAcceptiveFunc,
  falsyRejectingFunc
};

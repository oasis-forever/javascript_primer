"use strict";

// Fuxntions dealing with a default argument
const defaultArgFunc = (str, prefix = "Default ") => {
  const text = prefix + str;
  return text;
}

const falsyAcceptiveFunc = (str, prefix) => {
  const pre = prefix || "Default ";
  const text = pre + str;
  return text;
}

const falsyRejectingFunc = (str, prefix) => {
  const pre = prefix ?? "Default ";
  const text = pre + str;
  return text;
}

// Rest parameters
const restArgsFunc1 = (...arg) => {
  return arg;
};

const restArgsFunc2 = (arg_1, ...restArgs) => {
  return [arg_1, restArgs];
};

const argsSpreadFunc = (x, y, z) => {
  return [x, y, z];
};

export {
  defaultArgFunc,
  falsyAcceptiveFunc,
  falsyRejectingFunc,
  restArgsFunc1,
  restArgsFunc2,
  argsSpreadFunc
};

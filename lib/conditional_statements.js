"use strinct";

// If statement

const getJavaScriptVersion = (version) => {
  if (version === "ES5") {
    return "ECMAScript 5";
  } else if (version === "ES6") {
    return "ECMAScript 2015";
  } else if (version === "ES7") {
    return "ECMAScript 2016";
  } else {
    return "Input a version of a specific JavaScript version.";
  }
};

export {
  getJavaScriptVersion
};

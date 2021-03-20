"use strict;"

// Access properties
const getUserName1 = (user) => {
  const username = user.name;
  return username;
};

const getUserName2 = (user) => {
  const username = user["name"];
  return username;
};

// Destructuring assignment
const getLanguages1 = (langs) => {
  const en = langs["en"];
  const ja = langs["ja"];
  return [en, ja]
};

const getLanguages2 = (langs) => {
  const { en, ja } = langs;
  return [en, ja]
};

export {
  getUserName1,
  getUserName2,
  getLanguages1,
  getLanguages2
};

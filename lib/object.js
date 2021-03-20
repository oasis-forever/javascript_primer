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

export {
  getUserName1,
  getUserName2
};

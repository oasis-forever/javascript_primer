"use strict";

export const stateConstants = (name, category) => {
  const projectName     = name;
  const projectCategory = category;
  // const projectName     = name,
  //       projectCategory = category;
  return [projectName, projectCategory]
}

export const overrideConstant = (name) => {
  const projectName = "JavaScript Primer";
  projectName = name;
}

export const overrideLet = (name, category) => {
  let projectName     = name;
  let projectCategory = category;
  projectName = "Bar";
  return [projectName, projectCategory]
}

export const overrideVar = (name, category) => {
  var projectName     = name;
  var projectCategory = category;
  var projectName     = "Hoge";
  return [projectName, projectCategory]
}

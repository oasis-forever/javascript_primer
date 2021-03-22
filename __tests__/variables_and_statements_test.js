import {
  stateConstants,
  overrideConstant,
  overrideLet,
  overrideVar
} from "../lib/variables_and_statements";

test("State constants", () => {
  const constants = stateConstants("JavaScript Primer", "Front-end");
  const projectName     = constants[0]
  const projectCategory = constants[1]
  expect(projectName).toBe("JavaScript Primer");
  expect(projectCategory).toBe("Front-end");
});

test("Override a defined constant", () => {
  expect(() => {
    overrideConstant("Foo");
  }).toThrow();
});

test("Override a defined let", () => {
  const lets = overrideLet("JavaScript Primer", "Front-end");
  const projectName     = lets[0]
  const projectCategory = lets[1]
  expect(projectName).toBe("Bar");
  expect(projectCategory).toBe("Front-end");
});

test("Override a defined variable", () => {
  const vars = overrideVar("JavaScript Primer", "Front-end");
  const projectName     = vars[0]
  const projectCategory = vars[1]
  expect(projectName).toBe("Hoge");
  expect(projectCategory).toBe("Front-end");
});
